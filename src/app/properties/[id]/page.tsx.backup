'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { allProperties } from '@/lib/properties-data';


export function generateStaticParams() {
  return allProperties.map((property) => ({
    id: String(property.id),
  }));
}


export default function PropertyDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params?.id);
  const property = allProperties.find((p) => p.id === id);
  const [shortlisted, setShortlisted] = useState(false);

  if (!property) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-40 pb-24 flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5">
            <Icon name="MagnifyingGlassIcon" size={28} className="text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl text-foreground mb-2">Property not found</h1>
          <p className="text-muted-foreground text-sm mb-6 max-w-xs">
            This listing may have been removed, sold, or the link is incorrect.
          </p>
          <Link
            href="/properties"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Back to Properties
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const related = allProperties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  const relatedFallback = related.length > 0
    ? related
    : allProperties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <Icon name="ArrowLeftIcon" size={14} />
            Back to Properties
          </Link>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden h-[320px] md:h-[480px] mb-10">
            <AppImage
              src={property.image}
              alt={property.imageAlt}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <span
              className={`absolute top-6 left-6 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                property.tag === 'For Sale' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {property.tag}
            </span>
            <button
              onClick={() => setShortlisted((s) => !s)}
              aria-label={shortlisted ? 'Remove from shortlist' : 'Add to shortlist'}
              className={`absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 ${
                shortlisted
                  ? 'bg-rose-500 text-white shadow-md scale-110'
                  : 'bg-white/85 text-muted-foreground hover:bg-rose-50 hover:text-rose-500'
              }`}
            >
              <Icon name="HeartIcon" size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
                {property.area}
              </p>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-display text-3xl md:text-4xl text-foreground font-medium mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Icon name="MapPinIcon" size={15} />
                    {property.location}
                  </div>
                </div>
                <span className="font-display text-3xl font-semibold text-foreground whitespace-nowrap">
                  {property.price}
                </span>
              </div>

              {/* Specs */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-6 border-y border-border mb-8">
                <span className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Icon name="HomeIcon" size={16} className="text-accent" />
                  {property.beds} Bedrooms
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Icon name="SparklesIcon" size={16} className="text-accent" />
                  {property.baths} Bathrooms
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Icon name="ArrowsPointingOutIcon" size={16} className="text-accent" />
                  {property.sqft} sq ft
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Icon name="ClockIcon" size={16} className="text-accent" />
                  {property.daysOnMarket} days on market
                </span>
              </div>

              {/* Description */}
              <h2 className="font-display text-xl text-foreground font-medium mb-4">About this property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {property.title} sits in the heart of {property.location}, offering a rare combination of
                space, light, and location. This {property.type.toLowerCase()} spans {property.sqft} sq ft
                across {property.beds} bedroom{property.beds !== 1 ? 's' : ''} and {property.baths} bathroom
                {property.baths !== 1 ? 's' : ''}, finished to a high standard throughout.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Contact our team to arrange a private viewing and receive the full property brochure,
                floor plans, and current availability.
              </p>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card rounded-3xl shadow-card p-6 md:sticky md:top-28">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-border flex-shrink-0">
                    <AppImage
                      src={property.agent.avatar}
                      alt={property.agent.avatarAlt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Listed by</p>
                    <p className="font-semibold text-foreground text-sm">{property.agent.name}</p>
                  </div>
                </div>
                <Link
                  href="/book-a-viewing"
                  className="group w-full flex items-center justify-center gap-2 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:shadow-accent transition-all duration-300 hover:scale-[1.01] mb-3"
                >
                  Book a Viewing
                  <Icon name="CalendarDaysIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+442071234567"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full border-2 border-border text-foreground font-semibold text-sm hover:bg-muted transition-all duration-300"
                >
                  <Icon name="PhoneIcon" size={16} />
                  Call Agent
                </a>
              </div>
            </div>
          </div>

          {/* Related properties */}
          {relatedFallback.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-section-lg text-foreground mb-8">
                Similar <span className="italic font-light text-muted-foreground">Properties.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedFallback.map((p) => (
                  <Link
                    key={p.id}
                    href={`/properties/${p.id}`}
                    className="property-card bg-card rounded-3xl overflow-hidden shadow-card hover-lift block"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <AppImage
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover property-card-img"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-medium text-foreground mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
