import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import FocusAreaCard from '@/components/FocusAreaCard';
import FacultyCard from '@/components/FacultyCard';
import ResearchCard from '@/components/ResearchCard';
import NewsCard from '@/components/NewsCard';
import {
  getFaculty,
  getActiveResearch,
  getNewsSorted,
  filterResearchByFocus,
} from '@/lib/data';

const wrap = {
  maxWidth: '1320px',
  margin: 'auto',
  padding: '0 6%',
} as const;

export default function HomePage() {
  const allFaculty = getFaculty();
  const featuredResearch = getActiveResearch().slice(0, 3);
  const latestNews = getNewsSorted().slice(0, 3);

  const airCount = filterResearchByFocus('air').length;
  const waterCount = filterResearchByFocus('water').length;
  const soilCount = filterResearchByFocus('soil').length;

  return (
    <>
      <HeroSection />

      {/* ── Intro ── */}
      <section style={{ ...wrap, paddingTop: '85px', paddingBottom: '80px' }}>
        <p className="eyebrow" style={{ color: 'var(--ink-muted)' }}>
          One connected environment
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '65px',
            alignItems: 'start',
          }}
          className="intro-grid"
        >
          <h2 className="heading-lg">
            Cities don't end
            <br />
            at the city limits.
          </h2>
          <p
            style={{
              lineHeight: 1.8,
              color: '#4a7090',
              fontSize: '15px',
              margin: 0,
            }}
          >
            Their air moves across regions. Their water travels through watersheds. Their
            soils connect neighborhoods to the landscapes around them. The Sustainable
            Cities Laboratory brings these connections into focus through research,
            measurement, and collaboration.
          </p>
        </div>
      </section>

      {/* ── Focus Areas ── */}
      <section id="explore" style={{ ...wrap, paddingBottom: '80px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '25px',
            marginBottom: '30px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p className="eyebrow">Discover the connections</p>
            <h2 className="heading-md">Three lenses. One living system.</h2>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#55728a', margin: 0, maxWidth: '240px' }}>
            Choose a theme to explore related researchers and research pathways.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }}
          className="domain-grid"
        >
          <FocusAreaCard
            type="air"
            title="Air Quality"
            description="Measuring, modeling, and mitigating urban air pollution from PM2.5 to ozone to greenhouse gases."
            count={airCount}
            index={0}
          />
          <FocusAreaCard
            type="water"
            title="Water Systems"
            description="Advanced membrane technologies, urban stream biogeochemistry, and emerging contaminant remediation."
            count={waterCount}
            index={1}
          />
          <FocusAreaCard
            type="soil"
            title="Soil &amp; Land Use"
            description="Carbon dynamics, soil contamination, and microbial ecology across the urban-to-rural gradient."
            count={soilCount}
            index={2}
          />
        </div>
      </section>

      {/* ── Featured Research ── */}
      <section style={{ ...wrap, paddingBottom: '80px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '25px',
            marginBottom: '30px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p className="eyebrow">Active projects</p>
            <h2 className="heading-md">Questions that cross boundaries.</h2>
          </div>
          <span className="pill">CURRENT RESEARCH HIGHLIGHTS</span>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}
          className="path-grid"
        >
          {featuredResearch.map((project) => (
            <ResearchCard key={project.id} project={project} />
          ))}
        </div>

        <div style={{ marginTop: '40px' }}>
          <Link
            href="/research"
            style={{
              textDecoration: 'none',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: '7px',
              fontSize: '13px',
              color: 'var(--ink)',
            }}
          >
            View all research projects ↗
          </Link>
        </div>
      </section>

      {/* ── Faculty Network ── */}
      <section
        id="people"
        style={{ background: '#dde8f4', padding: '75px 0' }}
      >
        <div style={wrap}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '25px',
              marginBottom: '35px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p className="eyebrow">The CESE research network</p>
              <h2 className="heading-md">Find your next connection.</h2>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#55728a', margin: 0, maxWidth: '240px' }}>
              {allFaculty.length} faculty spanning air, water, and soil sustainability.
            </p>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}
            className="people-grid"
          >
            {allFaculty.slice(0, 9).map((f) => (
              <FacultyCard key={f.id} faculty={f} />
            ))}
          </div>

          {allFaculty.length > 9 && (
            <div style={{ marginTop: '28px' }}>
              <Link
                href="/faculty"
                style={{
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--ink)',
                  paddingBottom: '7px',
                  fontSize: '13px',
                  color: 'var(--ink)',
                }}
              >
                View all {allFaculty.length} faculty members ↗
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Labs Section ── */}
      <section
        id="laboratories"
        style={{
          ...wrap,
          paddingTop: '85px',
          paddingBottom: '85px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '70px',
          alignItems: 'center',
        }}
        className="lab-section"
      >
        <Image
          src="/connected-systems.png"
          alt="Concept illustration connecting atmosphere, a river, wetland vegetation, and soil roots beneath a city."
          width={660}
          height={355}
          style={{ display: 'block', width: '100%', height: '355px', objectFit: 'cover', borderRadius: '3px' }}
        />
        <div>
          <p className="eyebrow">The science behind the solutions</p>
          <h2 className="heading-md" style={{ marginBottom: '25px' }}>
            Bring the field
            <br />
            into focus.
          </h2>
          <p style={{ lineHeight: 1.8, color: '#4a7090', fontSize: '15px', margin: '0 0 25px' }}>
            Strong environmental research connects observations in the landscape with
            measurements in the laboratory. Explore CESE's analytical capabilities and
            discuss the methods, samples, and expertise your project needs.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '0 0 28px' }}>
            {['Nutrients', 'Organic compounds', 'Trace metals', 'Isotope analysis', 'Genomics'].map((cap) => (
              <span
                key={cap}
                style={{
                  fontSize: '11px',
                  padding: '9px 12px',
                  border: '1px solid #a8bcd4',
                  borderRadius: '20px',
                  color: 'var(--ink)',
                }}
              >
                {cap}
              </span>
            ))}
          </div>
          <Link
            href="/labs"
            style={{
              textDecoration: 'none',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: '7px',
              fontSize: '13px',
              color: 'var(--ink)',
            }}
          >
            Explore all laboratories ↗
          </Link>
        </div>
      </section>

      {/* ── News & Publications ── */}
      <section style={{ background: '#dde8f4', padding: '75px 0' }}>
        <div style={wrap}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '25px',
              marginBottom: '30px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p className="eyebrow">Latest from the lab</p>
              <h2 className="heading-md">News &amp; Publications</h2>
            </div>
            <Link
              href="/news"
              style={{
                textDecoration: 'none',
                borderBottom: '1px solid var(--ink)',
                paddingBottom: '7px',
                fontSize: '13px',
                color: 'var(--ink)',
              }}
            >
              All news &amp; publications ↗
            </Link>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}
            className="path-grid"
          >
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Connect CTA ── */}
      <section
        id="connect"
        style={{ background: 'var(--ink)', color: 'white', padding: '70px 0' }}
      >
        <div style={wrap}>
          <p className="eyebrow" style={{ color: 'var(--green)' }}>
            Start with a question
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              margin: '0 0 20px',
            }}
          >
            What could we
            <br />
            discover together?
          </h2>
          <p
            style={{
              maxWidth: '440px',
              lineHeight: 1.7,
              fontSize: '14px',
              color: '#b5cce0',
              margin: '0 0 32px',
            }}
          >
            For researchers, communities, public agencies, and industry partners working
            toward healthier environments.
          </p>
          <a
            href="https://environmental-sciences-engineering.center.uconn.edu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '40px',
              background: 'var(--green)',
              color: '#0d2540',
              borderRadius: '3px',
              padding: '17px 23px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            Connect through CESE <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
