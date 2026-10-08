import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Book a Viewing', href: '/book-a-viewing' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const socialLinks = [
  { icon: 'GlobeAltIcon', href: '#', label: 'Website' },
  { icon: 'EnvelopeIcon', href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + Copyright */}
        <div className="flex items-center gap-3">
          <AppLogo size={32} />
          <span className="text-sm font-medium text-muted-foreground">
            © 2026 PropVista Ltd.
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <Icon name={s.icon as 'GlobeAltIcon'} size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
