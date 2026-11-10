'use client';

import Link from 'next/link';
import { useState, useRef, useCallback } from 'react';

const serviceLinks = [
  {
    href: '/labs/organic-molecular-analysis-laboratory',
    label: 'Organic Molecular Analysis Laboratory',
    short: 'Organic compounds, PFAS, pesticides, PAHs',
  },
  {
    href: '/labs/inorganic-analysis-laboratory',
    label: 'Inorganic Analysis Laboratory',
    short: 'Metals, nutrients, anions, mercury',
  },
  {
    href: '/training-programs',
    label: 'Training Programs',
    short: 'Instrument, field, and data training',
  },
];

const innovationLinks = [
  {
    href: '/labs/perkinelmer-innovation-lab',
    label: 'PerkinElmer Innovation Laboratory',
    short: 'Industry partnership · advanced platforms',
  },
  {
    href: '/faculty',
    label: 'Our Network',
    short: 'Browse & search faculty by research expertise',
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const newsDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const newsDropdownRef = useRef<HTMLDivElement>(null);

  function openDropdown() {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  function openNewsDropdown() {
    if (newsDropdownTimer.current) clearTimeout(newsDropdownTimer.current);
    setNewsDropdownOpen(true);
  }

  function closeNewsDropdown() {
    newsDropdownTimer.current = setTimeout(() => setNewsDropdownOpen(false), 120);
  }

  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setDropdownOpen(false);
      (dropdownRef.current?.querySelector('button') as HTMLElement | null)?.focus();
    }
  }, []);

  const handleNewsDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setNewsDropdownOpen(false);
      (newsDropdownRef.current?.querySelector('button') as HTMLElement | null)?.focus();
    }
  }, []);

  const handleButtonKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen((o) => !o);
    } else if (e.key === 'Escape') {
      setDropdownOpen(false);
    }
  }, []);

  const handleNewsButtonKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setNewsDropdownOpen((o) => !o);
    } else if (e.key === 'Escape') {
      setNewsDropdownOpen(false);
    }
  }, []);

  return (
    <>
      {/* University bar */}
      <div
        style={{
          background: '#071d31',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '13px 4%',
          gap: '25px',
          fontSize: '13px',
          letterSpacing: '1.4px',
        }}
      >
        <a
          href="https://uconn.edu/"
          style={{
            fontWeight: 900,
            fontSize: '28px',
            letterSpacing: '-1px',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          UCONN
        </a>
        <span>CENTER FOR ENVIRONMENTAL SCIENCES &amp; ENGINEERING</span>
      </div>

      {/* Main header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          padding: '25px 4%',
          background: 'var(--paper)',
          position: 'relative',
          zIndex: 100,
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: 'flex',
            gap: '12px',
            textDecoration: 'none',
            fontSize: '22px',
            lineHeight: '1.15',
            color: 'var(--ink)',
          }}
        >
          <svg
            viewBox="0 0 40 40"
            aria-hidden="true"
            style={{ width: '39px', fill: 'none', stroke: 'var(--ink)', strokeWidth: '1.7', flexShrink: 0 }}
          >
            <path d="M5 28V15l10-6v19m5 0V5l14 8v15M3 33c8-8 15 7 34-2" />
          </svg>
          <span>
            Sustainable Cities
            <br />
            <b style={{ fontWeight: 400 }}>Laboratory</b>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex"
          style={{ display: 'flex', alignItems: 'center', gap: '28px', fontSize: '15px' }}
        >
          <Link href="/research" style={{ textDecoration: 'none', color: 'var(--ink)' }}>
            Explore research
          </Link>

          {/* Research & Analytical Hubs dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            onKeyDown={handleDropdownKeyDown}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                color: 'var(--ink)',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-controls="hubs-dropdown"
              onFocus={openDropdown}
              onBlur={closeDropdown}
              onKeyDown={handleButtonKeyDown}
            >
              Research &amp; Analytical Hubs
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{
                  transition: 'transform 0.15s',
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  opacity: 0.6,
                }}
              >
                <path d="M2 3.5l3 3 3-3" />
              </svg>
            </button>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div
                id="hubs-dropdown"
                role="menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 14px)',
                  right: 0,
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  boxShadow: '0 8px 24px rgba(18,55,47,0.10)',
                  minWidth: '360px',
                  zIndex: 200,
                }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                {/* Service section */}
                <div style={{ padding: '14px 20px 10px', borderBottom: '1px solid var(--line)' }}>
                  <p style={{ fontSize: '9px', letterSpacing: '1.8px', textTransform: 'uppercase', fontWeight: 700, color: '#4d6a85', margin: 0 }}>
                    Service
                  </p>
                </div>
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    onFocus={openDropdown}
                    onBlur={closeDropdown}
                    style={{ display: 'block', padding: '14px 20px', textDecoration: 'none', color: 'var(--ink)', borderBottom: '1px solid var(--line)', transition: 'background 0.12s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#e8f0f8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 400, display: 'block', marginBottom: '3px' }}>{item.label}</span>
                    <span style={{ fontSize: '11px', color: '#4d6a85' }}>{item.short}</span>
                  </Link>
                ))}

                {/* Innovation section */}
                <div style={{ padding: '14px 20px 10px', borderBottom: '1px solid var(--line)', borderTop: '1px solid var(--line)', background: '#f8fafc' }}>
                  <p style={{ fontSize: '9px', letterSpacing: '1.8px', textTransform: 'uppercase', fontWeight: 700, color: '#4d6a85', margin: 0 }}>
                    Innovation
                  </p>
                </div>
                {innovationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    onFocus={openDropdown}
                    onBlur={closeDropdown}
                    style={{ display: 'block', padding: '14px 20px', textDecoration: 'none', color: 'var(--ink)', borderBottom: '1px solid var(--line)', transition: 'background 0.12s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#e8f0f8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 400, display: 'block', marginBottom: '3px' }}>{item.label}</span>
                    <span style={{ fontSize: '11px', color: '#4d6a85' }}>{item.short}</span>
                  </Link>
                ))}

                {/* Footer */}
                <Link
                  href="/labs"
                  role="menuitem"
                  onClick={() => setDropdownOpen(false)}
                  onFocus={openDropdown}
                  onBlur={closeDropdown}
                  style={{ display: 'block', padding: '11px 20px', textDecoration: 'none', fontSize: '11px', color: '#55728a', letterSpacing: '0.4px' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#e8f0f8')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                >
                  View all laboratories →
                </Link>
              </div>
            )}
          </div>

          <Link href="/faculty" style={{ textDecoration: 'none', color: 'var(--ink)' }}>
            Our Network
          </Link>
          <Link href="/training-programs" style={{ textDecoration: 'none', color: 'var(--ink)' }}>
            Training Programs
          </Link>
          {/* CESE News dropdown */}
          <div
            ref={newsDropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={openNewsDropdown}
            onMouseLeave={closeNewsDropdown}
            onKeyDown={handleNewsDropdownKeyDown}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                color: 'var(--ink)',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
              aria-expanded={newsDropdownOpen}
              aria-haspopup="true"
              aria-controls="news-dropdown"
              onFocus={openNewsDropdown}
              onBlur={closeNewsDropdown}
              onKeyDown={handleNewsButtonKeyDown}
            >
              CESE News
              <svg
                width="10" height="10" viewBox="0 0 10 10"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                style={{
                  transition: 'transform 0.15s',
                  transform: newsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  opacity: 0.6,
                }}
              >
                <path d="M2 3.5l3 3 3-3" />
              </svg>
            </button>

            {newsDropdownOpen && (
              <div
                id="news-dropdown"
                role="menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 14px)',
                  right: 0,
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  boxShadow: '0 8px 24px rgba(18,55,47,0.10)',
                  minWidth: '220px',
                  zIndex: 200,
                }}
                onMouseEnter={openNewsDropdown}
                onMouseLeave={closeNewsDropdown}
              >
                {[
                  { href: '/news', label: 'Publications' },
                  { href: '/media', label: 'Media Mentions' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setNewsDropdownOpen(false)}
                    onFocus={openNewsDropdown}
                    onBlur={closeNewsDropdown}
                    style={{ display: 'block', padding: '14px 20px', textDecoration: 'none', color: 'var(--ink)', borderBottom: '1px solid var(--line)', transition: 'background 0.12s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#e8f0f8')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 400 }}>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/x-labs" style={{ textDecoration: 'none', color: 'var(--ink)' }}>
            X Labs
          </Link>

          <Link
            href="/labs"
            style={{
              border: '1px solid var(--ink)',
              borderRadius: '30px',
              padding: '12px 18px',
              textDecoration: 'none',
              color: 'var(--ink)',
              whiteSpace: 'nowrap',
            }}
          >
            Connect with CESE ↗
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--ink)' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', zIndex: 99, position: 'relative' }}
        >
          {[
            { href: '/research', label: 'Explore research' },
            { href: '/labs/organic-molecular-analysis-laboratory', label: 'Organic Molecular Analysis Lab' },
            { href: '/labs/inorganic-analysis-laboratory', label: 'Inorganic Analysis Lab' },
            { href: '/training-programs', label: 'Training Programs' },
            { href: '/labs/perkinelmer-innovation-lab', label: 'PerkinElmer Innovation Lab' },
            { href: '/faculty', label: 'Our Network' },
            { href: '/labs', label: 'All laboratories' },
            { href: '/news', label: 'CESE News — Publications' },
            { href: '/media', label: 'CESE News — Media Mentions' },
            { href: '/x-labs', label: 'X Labs' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '13px 6%',
                textDecoration: 'none',
                fontSize: '14px',
                color: 'var(--ink)',
                borderBottom: '1px solid var(--line)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
