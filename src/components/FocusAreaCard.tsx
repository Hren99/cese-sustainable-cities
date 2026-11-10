'use client';

import React from 'react';
import Link from 'next/link';

interface FocusAreaCardProps {
  type: 'air' | 'water' | 'soil' | 'health';
  title: string;
  description: string;
  count: number;
  index: number;
}

const domainStyles = {
  air:    { bg: '#234f65', text: '#cae8ee' },
  water:  { bg: '#075456', text: '#b9f0dc' },
  soil:   { bg: '#694b37', text: '#f0d8ad' },
  health: { bg: '#4a2545', text: '#f0cce8' },
};

/* SVG motifs – line drawings for each domain */
const motifs: Record<string, React.ReactNode> = {
  air: (
    <svg
      viewBox="0 0 180 180"
      aria-hidden="true"
      style={{ position: 'absolute', width: 180, height: 180, right: -12, top: 5, opacity: 0.6, fill: 'none', stroke: 'currentColor', strokeWidth: 1 }}
    >
      <path d="M 10,55 C 40,38 65,72 95,56 C 125,40 148,76 170,58" />
      <path d="M 10,78 C 42,61 67,97 97,80 C 127,63 150,100 170,82" />
      <path d="M 10,101 C 40,84 65,118 95,102 C 125,86 148,122 170,105" />
      <path d="M 10,124 C 40,107 65,141 95,125 C 125,109 148,146 170,128" />
      <path d="M 15,147 C 42,130 67,164 97,148 C 127,132 152,168 170,151" />
    </svg>
  ),
  water: (
    <svg
      viewBox="0 0 180 180"
      aria-hidden="true"
      style={{ position: 'absolute', width: 180, height: 180, right: -12, top: 5, opacity: 0.6, fill: 'none', stroke: 'currentColor', strokeWidth: 1 }}
    >
      <path d="M 90,15 C 60,55 38,80 38,108 C 38,138 62,158 90,158 C 118,158 142,138 142,108 C 142,80 120,55 90,15" />
      <path d="M 15,112 C 36,102 56,122 76,112 C 96,102 116,122 136,112 C 150,105 163,114 175,112" />
      <path d="M 12,132 C 33,122 53,142 73,132 C 93,122 113,142 133,132 C 150,124 165,135 176,132" />
      <path d="M 90,70 C 80,85 72,98 72,108 C 72,122 80,130 90,130" strokeDasharray="3 4" />
    </svg>
  ),
  soil: (
    <svg
      viewBox="0 0 180 180"
      aria-hidden="true"
      style={{ position: 'absolute', width: 180, height: 180, right: -12, top: 5, opacity: 0.6, fill: 'none', stroke: 'currentColor', strokeWidth: 1 }}
    >
      {/* Ground lines */}
      <path d="M 10,78 L 170,78" />
      <path d="M 10,98 L 170,98" />
      <path d="M 10,118 L 170,118" />
      {/* Plant stem above ground */}
      <path d="M 90,78 L 90,15" />
      <path d="M 90,38 C 90,38 68,28 60,15" />
      <path d="M 90,38 C 90,38 112,28 120,15" />
      <path d="M 90,55 C 90,55 74,46 68,33" />
      <path d="M 90,55 C 90,55 106,46 112,33" />
      {/* Roots below ground */}
      <path d="M 90,118 L 65,155" />
      <path d="M 90,118 L 115,155" />
      <path d="M 90,135 L 72,165" />
      <path d="M 90,135 L 108,165" />
      <path d="M 90,118 L 90,165" />
    </svg>
  ),
  health: (
    <svg
      viewBox="0 0 180 180"
      aria-hidden="true"
      style={{ position: 'absolute', width: 180, height: 180, right: -12, top: 5, opacity: 0.6, fill: 'none', stroke: 'currentColor', strokeWidth: 1 }}
    >
      {/* Human figure */}
      <circle cx="90" cy="30" r="12" />
      <path d="M 90,42 L 90,100" />
      <path d="M 90,60 L 65,85" />
      <path d="M 90,60 L 115,85" />
      <path d="M 90,100 L 70,138" />
      <path d="M 90,100 L 110,138" />
      {/* Heartbeat / pulse line */}
      <path d="M 15,155 L 45,155 L 55,130 L 65,170 L 75,145 L 85,155 L 115,155 L 125,135 L 135,165 L 145,155 L 165,155" strokeWidth="1.4" />
    </svg>
  ),
};

export default function FocusAreaCard({ type, title, description, count, index }: FocusAreaCardProps) {
  const { bg, text } = domainStyles[type];

  return (
    <Link
      href={`/research?focus=${type}`}
      style={{
        position: 'relative',
        minHeight: '325px',
        padding: '24px',
        color: text,
        textDecoration: 'none',
        background: bg,
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
    >
      {/* Number */}
      <span
        style={{
          position: 'absolute',
          top: '20px',
          left: '24px',
          fontSize: '10px',
          letterSpacing: '2px',
          opacity: 0.8,
        }}
      >
        0{index + 1}
      </span>

      {/* Arrow */}
      <span
        aria-hidden="true"
        style={{ position: 'absolute', right: '20px', top: '20px', fontSize: '21px', opacity: 0.9 }}
      >
        ↗
      </span>

      {/* SVG motif */}
      {motifs[type]}

      {/* Content pushed to bottom */}
      <div style={{ marginTop: 'auto', paddingTop: '145px' }}>
        <h3
          style={{
            fontSize: '28px',
            fontWeight: 400,
            margin: '0 0 10px',
            letterSpacing: '-0.8px',
            color: 'white',
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: '12px', lineHeight: 1.6, margin: 0 }}>{description}</p>
        <p
          style={{
            fontSize: '10px',
            margin: '12px 0 0',
            opacity: 0.7,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {count} projects
        </p>
      </div>
    </Link>
  );
}
