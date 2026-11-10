import { faculty, type Faculty, type FocusArea } from '@/data/faculty';
import { research, type ResearchProject } from '@/data/research';
import { labs, type Lab } from '@/data/labs';
import { news, type NewsItem } from '@/data/news';

// Faculty helpers
export function getFaculty(): Faculty[] {
  return faculty;
}

export function getFacultyBySlug(slug: string): Faculty | undefined {
  return faculty.find((f) => f.slug === slug);
}

export function filterFacultyByFocus(focus: FocusArea): Faculty[] {
  return faculty.filter((f) => f.focusAreas.includes(focus));
}

// Research helpers
export function getResearch(): ResearchProject[] {
  return research;
}

export function getResearchBySlug(slug: string): ResearchProject | undefined {
  return research.find((r) => r.slug === slug);
}

export function filterResearchByFocus(focus: FocusArea): ResearchProject[] {
  return research.filter((r) => r.focusArea === focus);
}

export function paginateResearch(
  items: ResearchProject[],
  page: number,
  pageSize = 6
): { data: ResearchProject[]; total: number } {
  const start = (page - 1) * pageSize;
  return {
    data: items.slice(start, start + pageSize),
    total: items.length,
  };
}

// Labs helpers
export function getLabs(): Lab[] {
  return labs;
}

export function getLabBySlug(slug: string): Lab | undefined {
  return labs.find((l) => l.slug === slug);
}

export function filterLabsByFocus(focus: FocusArea): Lab[] {
  return labs.filter((l) => l.focusAreas.includes(focus));
}

// News helpers
export function getNews(): NewsItem[] {
  return news;
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

export function filterNewsByType(type: 'news' | 'publication'): NewsItem[] {
  return news.filter((n) => n.type === type);
}

export function paginateNews(
  items: NewsItem[],
  page: number,
  pageSize = 6
): { data: NewsItem[]; total: number } {
  const start = (page - 1) * pageSize;
  return {
    data: items.slice(start, start + pageSize),
    total: items.length,
  };
}

// Analytical labs (appear in nav dropdown)
export function getAnalyticalLabs() {
  return labs.filter((l) => l.analytical);
}

// Sorted news (most recent first)
export function getNewsSorted(): NewsItem[] {
  return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Active research projects sorted by most recent
export function getActiveResearch(): ResearchProject[] {
  return research.filter((r) => r.status === 'active');
}
