import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-24">
        <p className="font-display text-8xl font-semibold text-accent/30 mb-4">404</p>
        <h1 className="font-display text-3xl font-medium text-foreground mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-secondary transition-colors duration-200"
        >
          <Icon name="ArrowLeftIcon" size={16} />
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
