export interface NewsArticle {
  id: string;        // hash of link for dedup
  title: string;
  link: string;
  pubDate: string;   // raw date string from RSS
  isoDate: string;   // ISO 8601 for sorting
  source: string;    // publication name
  description: string;
  tag: string;       // 'CESE' | 'Faculty' | 'Sustainable Cities Lab'
  matchedName?: string; // which faculty member was matched, if relevant
}

// ── RSS parser ───────────────────────────────────────────────────────────────

function extractCDATA(raw: string): string {
  return raw
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .trim();
}

// Used only for description — strips bare URLs and decodes entities
function cleanSnippet(raw: string): string {
  return raw
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1') // unwrap CDATA
    .replace(/&lt;/g, '<')                          // decode entities BEFORE tag stripping
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, ' ')                       // strip all HTML tags
    .replace(/https?:\/\/\S+/g, '')                 // remove bare URLs
    .replace(/&nbsp;/g, ' ')                        // decode remaining entities
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstMatch(xml: string, ...patterns: RegExp[]): string {
  for (const p of patterns) {
    const m = xml.match(p);
    if (m?.[1]) return extractCDATA(m[1]).trim();
  }
  return '';
}

function parseItems(xml: string, tag: string): NewsArticle[] {
  const items: NewsArticle[] = [];
  const itemRx = /<item>([\s\S]*?)<\/item>/g;
  let m: RegExpExecArray | null;

  while ((m = itemRx.exec(xml)) !== null) {
    const raw = m[1];

    const title = firstMatch(raw, /<title>([\s\S]*?)<\/title>/);
    const link  = firstMatch(raw, /<link>([\s\S]*?)<\/link>/, /<guid[^>]*>([\s\S]*?)<\/guid>/);
    const pubDate = firstMatch(raw, /<pubDate>([\s\S]*?)<\/pubDate>/);
    const source  = firstMatch(raw, /<source[^>]*>([\s\S]*?)<\/source>/);
    const rawDescription = raw.match(/<description>([\s\S]*?)<\/description>/)?.[1] ?? '';
    const description = cleanSnippet(rawDescription);

    if (!title || !link) continue;

    // Parse date robustly
    let isoDate = '';
    if (pubDate) {
      try {
        isoDate = new Date(pubDate).toISOString();
      } catch {
        isoDate = new Date().toISOString();
      }
    }

    // Simple hash for dedup key
    const id = link.replace(/[^a-zA-Z0-9]/g, '').slice(-40);

    items.push({ id, title, link, pubDate, isoDate, source, description, tag });
  }

  return items;
}

// ── Fetch a single Google News RSS query ─────────────────────────────────────

async function fetchQuery(q: string, tag: string): Promise<NewsArticle[]> {
  // tbs=sbd:1 → sort by date so we always get the most recent coverage
  const url =
    `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-US&gl=US&ceid=US:en&tbs=sbd:1`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept: 'application/rss+xml, application/xml, text/xml, */*',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];
    const xml = await res.text();
    return parseItems(xml, tag);
  } catch {
    return [];
  }
}

// ── Query definitions ─────────────────────────────────────────────────────────

/**
 * All queries include "UConn" (or a unique enough name) to filter out
 * unrelated people with the same name.
 */
const FACULTY_QUERIES: { name: string; q: string }[] = [
  { name: 'Michael Hren',           q: '"Michael Hren" UConn' },
  { name: 'Zhao Wang',              q: '"Zhao Wang" UConn geochemistry OR "Zhao Wang" UConn CESE' },
  { name: 'Baikun Li',              q: '"Baikun Li" UConn' },
  { name: 'Jessica Brandt',         q: '"Jessica Brandt" UConn' },
  { name: 'Robert Fahey',           q: '"Robert Fahey" UConn' },
  { name: 'Guiling Wang',           q: '"Guiling Wang" UConn' },
  { name: 'Ashley Helton',          q: '"Ashley Helton" UConn' },
  { name: 'Beth Lawrence',          q: '"Beth Lawrence" UConn' },
  { name: 'Jeff McCutcheon',        q: '"Jeff McCutcheon" UConn' },
  { name: 'Julissa Rojas-Sandoval', q: '"Julissa Rojas-Sandoval"' },
  { name: 'Leslie Shor',            q: '"Leslie Shor" UConn' },
  { name: 'Tim Vadas',              q: '"Tim Vadas" UConn' },
  { name: 'Chuanrong Zhang',        q: '"Chuanrong Zhang" OR "Cindy Zhang" UConn' },
];

const TOPIC_QUERIES: { tag: string; q: string }[] = [
  {
    tag: 'CESE',
    q: '"Center for Environmental Sciences" UConn OR "UConn CESE"',
  },
  {
    tag: 'Sustainable Cities Lab',
    q: '"Sustainable Cities Laboratory" UConn',
  },
];

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchInTheNews(): Promise<{ articles: NewsArticle[]; fetchedAt: string }> {
  // Run topic queries + faculty queries concurrently
  const [topicResults, ...facultyResults] = await Promise.all([
    Promise.all(TOPIC_QUERIES.map(({ tag, q }) => fetchQuery(q, tag))),
    ...FACULTY_QUERIES.map(({ name, q }) =>
      fetchQuery(q, 'Faculty').then((items) =>
        items.map((a) => ({ ...a, matchedName: name }))
      )
    ),
  ]);

  const all: NewsArticle[] = [
    ...topicResults.flat(),
    ...facultyResults.flat(),
  ];

  // Deduplicate by id (derived from link)
  const seen = new Set<string>();
  const unique = all.filter((a) => {
    if (seen.has(a.id)) return false;
    seen.add(a.id);
    return true;
  });

  // Sort newest first; articles with no parseable date go last
  unique.sort((a, b) => {
    if (!a.isoDate) return 1;
    if (!b.isoDate) return -1;
    return b.isoDate.localeCompare(a.isoDate);
  });

  return { articles: unique, fetchedAt: new Date().toISOString() };
}
