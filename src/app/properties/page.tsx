'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { allProperties } from '@/lib/properties-data';

const PROPERTY_TYPES = ['All Types', 'House', 'Flat', 'Penthouse', 'Townhouse'];
const LOCATIONS = ['All Locations', 'Central London', 'West London', 'South West London', 'East London', 'North London'];
const PRICE_RANGES = [
{ label: 'Any Price', min: 0, max: Infinity },
{ label: 'Under £1M / £3k/mo', min: 0, max: 3000000 },
{ label: '£1M – £5M', min: 1000000, max: 5000000 },
{ label: '£5M – £10M', min: 5000000, max: 10000000 },
{ label: '£10M+', min: 10000000, max: Infinity }];


export default function PropertiesPage() {
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [priceFilter, setPriceFilter] = useState('Any Price');
  const [listingFilter, setListingFilter] = useState<'All' | 'For Sale' | 'To Let'>('All');
  const [shortlisted, setShortlisted] = useState<Set<number>>(new Set());

  const toggleShortlist = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShortlisted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filtered = useMemo(() => {
    const priceRange = PRICE_RANGES.find((r) => r.label === priceFilter) ?? PRICE_RANGES[0];
    return allProperties.filter((p) => {
      const matchType = typeFilter === 'All Types' || p.type === typeFilter;
      const matchLocation = locationFilter === 'All Locations' || p.area === locationFilter;
      const matchListing = listingFilter === 'All' || p.tag === listingFilter;
      const matchPrice = p.priceValue >= priceRange.min && p.priceValue <= priceRange.max;
      return matchType && matchLocation && matchListing && matchPrice;
    });
  }, [typeFilter, locationFilter, priceFilter, listingFilter]);

  const hasActiveFilters =
  typeFilter !== 'All Types' ||
  locationFilter !== 'All Locations' ||
  priceFilter !== 'Any Price' ||
  listingFilter !== 'All';

  const clearFilters = () => {
    setTypeFilter('All Types');
    setLocationFilter('All Locations');
    setPriceFilter('Any Price');
    setListingFilter('All');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-24">
        {/* Page Hero */}
        <div className="max-w-6xl mx-auto px-6 mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
            Browse Listings
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-display text-section-xl text-foreground">
              All <span className="italic font-light text-muted-foreground">Properties.</span>
            </h1>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found — filter to narrow your search.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <div className="bg-card rounded-3xl shadow-card p-5 flex flex-wrap gap-4 items-end">
            {/* Listing type toggle */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Listing</span>
              <div className="flex rounded-2xl overflow-hidden border border-border">
                {(['All', 'For Sale', 'To Let'] as const).map((opt) =>
                <button
                  key={opt}
                  onClick={() => setListingFilter(opt)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  listingFilter === opt ?
                  'bg-primary text-primary-foreground' :
                  'bg-card text-muted-foreground hover:text-foreground'}`
                  }>
                  
                    {opt}
                  </button>
                )}
              </div>
            </div>

            {/* Type filter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Type</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 rounded-2xl border border-border bg-background text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer">
                
                {PROPERTY_TYPES.map((t) =>
                <option key={t} value={t}>{t}</option>
                )}
              </select>
            </div>

            {/* Location filter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Location</span>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-2 rounded-2xl border border-border bg-background text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer">
                
                {LOCATIONS.map((l) =>
                <option key={l} value={l}>{l}</option>
                )}
              </select>
            </div>

            {/* Price filter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Price</span>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 rounded-2xl border border-border bg-background text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer">
                
                {PRICE_RANGES.map((r) =>
                <option key={r.label} value={r.label}>{r.label}</option>
                )}
              </select>
            </div>

            {/* Clear filters */}
            {hasActiveFilters &&
            <button
              onClick={clearFilters}
              className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-foreground transition-colors duration-200 self-end pb-2">
              
                <Icon name="XMarkIcon" size={15} />
                Clear filters
              </button>
            }
          </div>
        </div>

        {/* Property Grid */}
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ?
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Icon name="MagnifyingGlassIcon" size={28} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground">No properties found</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Try adjusting your filters to see more results.
              </p>
              <button
              onClick={clearFilters}
              className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-secondary transition-colors">
              
                Clear all filters
              </button>
            </div> :

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) =>
            <article
              key={property.id}
              className="property-card bg-card rounded-3xl overflow-hidden shadow-card hover-lift">
              
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <AppImage
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover property-card-img" />
                
                    {/* For Sale / To Let badge */}
                    <span
                  className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  property.tag === 'For Sale' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'}`
                  }>
                  
                      {property.tag}
                    </span>

                    {/* Days on market badge */}
                    <span className="absolute bottom-4 left-4 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white">
                      <Icon name="ClockIcon" size={12} className="text-white/80" />
                      {property.daysOnMarket}d on market
                    </span>

                    {/* Add to Shortlist button */}
                    <button
                  onClick={(e) => toggleShortlist(property.id, e)}
                  aria-label={shortlisted.has(property.id) ? 'Remove from shortlist' : 'Add to shortlist'}
                  className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 ${
                  shortlisted.has(property.id) ?
                  'bg-rose-500 text-white shadow-md scale-110' :
                  'bg-card/80 text-muted-foreground hover:bg-rose-50 hover:text-rose-500'}`
                  }>
                      <Icon name="HeartIcon" size={16} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-lg font-medium text-foreground leading-tight">
                          {property.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                          <Icon name="MapPinIcon" size={14} />
                          {property.location}
                        </div>
                      </div>
                      <span className="font-display text-xl font-semibold text-foreground whitespace-nowrap ml-2">
                        {property.price}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 mt-4">
                      <span className="flex items-center gap-1">
                        <Icon name="HomeIcon" size={14} />
                        {property.beds} beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="SparklesIcon" size={14} />
                        {property.baths} baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="ArrowsPointingOutIcon" size={14} />
                        {property.sqft} ft²
                      </span>
                    </div>

                    {/* Agent row */}
                    <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-border">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
                        <AppImage
                      src={property.agent.avatar}
                      alt={property.agent.avatarAlt}
                      fill
                      sizes="28px"
                      className="object-cover" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Listed by <span className="font-semibold text-foreground">{property.agent.name}</span>
                      </span>
                    </div>

                    <Link
                  href={`/properties/${property.id}`}
                  className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-primary/5 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  
                      View Property
                      <Icon name="ArrowRightIcon" size={15} />
                    </Link>
                  </div>
                </article>
            )}
            </div>
          }
        </div>

        {/* Bottom CTA */}
        {filtered.length > 0 &&
        <div className="max-w-6xl mx-auto px-6 mt-16">
            <div className="bg-primary rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-section-lg text-primary-foreground mb-2">
                  Found your ideal property?
                </h2>
                <p className="text-primary-foreground/70 text-sm">
                  Book a private viewing at a time that suits you.
                </p>
              </div>
              <Link
              href="/book-a-viewing"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors duration-200">
              
                Book a Viewing
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        }
      </main>
      <Footer />
    </>);

}
