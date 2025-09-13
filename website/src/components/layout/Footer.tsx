import React from 'react';
import Link from 'next/link';

const footerLinks = {
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Leadership', href: '/about/leadership' },
    { label: 'Statement of Faith', href: '/about/statement-of-faith' },
    { label: 'Mission & Vision', href: '/about/mission-vision' },
  ],
  worship: [
    { label: 'Service Times', href: '/worship/service-times' },
    { label: 'What to Expect', href: '/worship/what-to-expect' },
    { label: 'Music & Liturgy', href: '/worship/music-liturgy' },
    { label: "Children's Ministry", href: '/worship/childrens-ministry' },
  ],
  resources: [
    { label: 'Sermons', href: '/resources/sermons' },
    { label: 'Articles', href: '/resources/articles' },
    { label: 'Study Materials', href: '/resources/study-materials' },
    { label: 'Links', href: '/resources/links' },
  ],
  events: [
    { label: 'Calendar', href: '/events/calendar' },
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Past Events', href: '/events/past' },
  ],
  connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Directions', href: '/contact/directions' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Prayer Requests', href: '/prayer-requests' },
  ],
};

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/gracereformedweiser', icon: 'facebook' },
  { label: 'YouTube', href: 'https://youtube.com/gracereformedweiser', icon: 'youtube' },
  { label: 'Email', href: 'mailto:info@gracereformedweiser.com', icon: 'email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-display font-bold text-white mb-4">
              Grace Reformed Church of Weiser
            </div>
            <p className="text-neutral-300 mb-4">
              A community of believers committed to the historic Christian faith and the Reformed tradition.
            </p>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>123 Main Street</p>
              <p>Weiser, ID 83672</p>
              <p>Phone: (208) 555-0123</p>
              <p>Email: info@gracereformedweiser.com</p>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Worship Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Worship</h3>
            <ul className="space-y-2">
              {footerLinks.worship.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Events */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-white mb-4">Events</h3>
            <ul className="space-y-2">
              {footerLinks.events.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Times */}
        <div className="mt-8 pt-8 border-t border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Service Times</h3>
              <div className="space-y-2 text-neutral-300">
                <p><span className="font-medium">Sunday Worship:</span> 10:00 AM</p>
                <p><span className="font-medium">Sunday School:</span> 9:00 AM</p>
                <p><span className="font-medium">Bible Study:</span> Wednesday 7:00 PM</p>
                <p><span className="font-medium">Prayer Meeting:</span> Thursday 6:30 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <span className="sr-only">{social.label}</span>
                    {social.icon === 'facebook' && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                    {social.icon === 'email' && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Grace Reformed Church of Weiser. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
