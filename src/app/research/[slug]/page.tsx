import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getResearchBySlug, getResearch } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getResearch().map((r) => ({ slug: r.slug }));
}

const focusLabels = { air: 'Air Quality', water: 'Water Systems', soil: 'Soil & Land Use' };
const domainColors = { air: '#234f65', water: '#075456', soil: '#694b37' };
const domainText = { air: '#cae8ee', water: '#b9f0dc', soil: '#f0d8ad' };

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getResearchBySlug(slug);
  if (!project) notFound();

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '55px 6% 85px' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '11px', color: '#4d6a85', marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#4d6a85' }}>Home</Link>
        <span>/</span>
        <Link href="/research" style={{ textDecoration: 'none', color: '#4d6a85' }}>Research</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>Project</span>
      </nav>

      {/* Domain color banner */}
      <div style={{
        background: domainColors[project.focusArea],
        color: domainText[project.focusArea],
        padding: '28px 32px',
        borderRadius: '4px',
        marginBottom: '40px',
      }}>
        <p style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px', opacity: 0.8 }}>
          {focusLabels[project.focusArea]} · {project.status === 'active' ? 'Active' : 'Completed'} · {project.startYear}–
        </p>
        <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, letterSpacing: '-1px', margin: 0, lineHeight: 1.15, color: 'white' }}>
          {project.title}
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '70px', alignItems: 'start' }} className="lab-section">
        {/* Meta */}
        <div>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', marginBottom: '24px' }}>
            <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Principal Investigator</small>
            <p style={{ fontSize: '18px', fontWeight: 400, margin: '8px 0 0', letterSpacing: '-0.3px' }}>{project.principalInvestigator}</p>
          </div>
          {project.collaborators.length > 0 && (
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', marginBottom: '24px' }}>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Collaborators</small>
              <p style={{ fontSize: '14px', color: '#4a7090', margin: '8px 0 0', lineHeight: 1.6 }}>{project.collaborators.join(', ')}</p>
            </div>
          )}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', marginBottom: '24px' }}>
            <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Funding</small>
            <p style={{ fontSize: '14px', color: '#4a7090', margin: '8px 0 0', lineHeight: 1.6 }}>{project.fundingSource}</p>
          </div>
          {/* Tags */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px' }}>
            <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '14px' }}>Keywords</small>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: '11px', padding: '7px 12px',
                  border: '1px solid #a8bcd4', borderRadius: '20px', color: '#55728a',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
          <p className="eyebrow" style={{ marginBottom: '14px' }}>Project summary</p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: 0 }}>{project.summary}</p>
        </div>
      </div>

      <div style={{ marginTop: '55px', borderTop: '1px solid var(--line)', paddingTop: '25px' }}>
        <Link href="/research" style={{
          textDecoration: 'none',
          borderBottom: '1px solid var(--ink)',
          paddingBottom: '4px',
          fontSize: '13px',
          color: 'var(--ink)',
        }}>
          ← Back to research
        </Link>
      </div>
    </div>
  );
}
