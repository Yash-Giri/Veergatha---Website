'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Compass } from 'lucide-react';
import EarlyAccessModal from '@/components/common/EarlyAccessModal';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [earlyAccessOpen, setEarlyAccessOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links as per requirements
  const navLinks = [
    { name: 'Stories', href: '/stories' },
    { name: 'Our Vision', href: '/vision' },
    { name: 'Concepts', href: '/concepts' },
    { name: 'Join Us', href: '#early-access' }, // Will open modal
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-[4.5rem] items-center justify-between px-4 sm:px-6 lg:px-8 ${
          scrolled
            ? 'bg-parchment-100/95 backdrop-blur-md border-b border-parchment-300/80'
            : 'bg-parchment-100/80 backdrop-blur-sm border-b border-transparent'
        } transition-all duration-300`}
      >
        {/* Left: Brand Name */}
        <Link
          href="/"
          className="flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-950"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-epic text-ink-950 transition-colors group-hover:text-ink-800">
            VEERGATHA
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-ink-600 font-sans -mt-0.5">
            वीरगाथा · HERITAGE DISCOVERY
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            // Special handling for Join Us link to open modal
            if (link.name === 'Join Us') {
              return (
                <button
                  key={link.name}
                  onClick={() => setEarlyAccessOpen(true)}
                  className={`text-sm tracking-widest uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-950 ${
                    pathname === '#early-access'
                      ? 'text-ink-950 font-semibold'
                      : 'text-ink-600 hover:text-ink-950 font-medium'
                  }`}
                >
                  Join Us
                  {pathname === '#early-access' && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink-950" />
                  )}
                </button>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-950 ${
                  isActive
                    ? 'text-ink-950 font-semibold'
                    : 'text-ink-600 hover:text-ink-950 font-medium'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink-950" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Primary CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/stories"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-ink-950 text-parchment-100 hover:bg-ink-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-950"
          >
            Find Your Story
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Link
            href="/stories"
            className="px-3 py-2 text-[11px] font-semibold tracking-widest uppercase bg-ink-950 text-parchment-100"
          >
            Find Story
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-800 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-ink-950"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex h-[20rem] max-h-[90vh] flex-col bg-parchment-100/95 backdrop-blur-md border-t border-parchment-300/80">
          <div className="flex flex-1 flex-col overflow-y-auto space-y-4 p-6">
            {navLinks.map((link) => {
              // Special handling for Join Us link to open modal
              if (link.name === 'Join Us') {
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setEarlyAccessOpen(true);
                    }}
                    className={`text-left text-base font-serif tracking-wider px-4 py-3 ${
                      pathname === '#early-access'
                        ? 'bg-parchment-200 text-ink-950 font-bold'
                        : 'text-ink-700 hover:text-ink-950'
                    }`}
                  >
                    Join Us (Early Access)
                  </button>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-serif tracking-wider px-4 py-3 rounded-lg ${
                    isActive
                      ? 'bg-parchment-200 text-ink-950 font-bold'
                      : 'text-ink-700 hover:text-ink-950 hover:bg-parchment-200/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 pb-6 border-t border-parchment-300/80">
            <Link
              href="/stories"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-4 text-xs font-semibold tracking-widest uppercase bg-ink-950 text-parchment-100"
            >
              <Compass className="w-4 h-4" />
              <span>Find Your Story</span>
            </Link>
          </div>
        </div>
      )}

      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </>
  );
}