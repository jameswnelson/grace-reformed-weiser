'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Statement of Faith', href: '/about/statement-of-faith' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
    ],
  },
  {
    label: 'Worship',
    href: '/worship',
    children: [
      { label: 'Service Times', href: '/worship/service-times' },
      { label: 'What to Expect', href: '/worship/what-to-expect' },
      { label: 'Music & Liturgy', href: '/worship/music-liturgy' },
      { label: "Children's Ministry", href: '/worship/childrens-ministry' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Sermons', href: '/resources/sermons' },
      { label: 'Articles', href: '/resources/articles' },
      { label: 'Study Materials', href: '/resources/study-materials' },
      { label: 'Links', href: '/resources/links' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    children: [
      { label: 'Calendar', href: '/events/calendar' },
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Past Events', href: '/events/past' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-display font-bold text-primary-700">
                Grace Reformed Church
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-100 hover:text-primary-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary" size="sm">
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-neutral-700 hover:text-primary-700 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-300">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-700 hover:bg-primary-100 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-primary-100 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="primary" size="sm" className="w-full">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
