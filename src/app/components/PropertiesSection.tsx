'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const properties = [
{
  id: 1,
  title: 'Notting Hill Garden House',
  location: 'Notting Hill, W11',
  price: '£3.2M',
  beds: 4,
  baths: 3,
  sqft: '2,100',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fecb3640-1768171241701.png",
  imageAlt: 'Elegant white Victorian townhouse exterior with black iron railings, bay windows, and lush garden in bright midday sunlight',
  tag: 'For Sale',
  tagColor: 'bg-accent text-accent-foreground'
},
{
  id: 2,
  title: 'Chelsea Riverside Flat',
  location: 'Chelsea, SW3',
  price: '£6,500/mo',
  beds: 2,
  baths: 2,
  sqft: '980',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1960e50a4-1772279841732.png",
  imageAlt: 'Contemporary open-plan apartment interior with high ceilings, exposed brick, designer furniture, and floor-to-ceiling city view windows',
  tag: 'To Let',
  tagColor: 'bg-secondary text-secondary-foreground'
},
{
  id: 3,
  title: 'Mayfair Penthouse Suite',
  location: 'Mayfair, W1K',
  price: '£8.75M',
  beds: 5,
  baths: 4,
  sqft: '3,400',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18dd73af8-1773061239918.png",
  imageAlt: 'Luxury penthouse rooftop terrace with panoramic London skyline views, designer outdoor furniture, and warm evening lighting',
  tag: 'For Sale',
  tagColor: 'bg-accent text-accent-foreground'
}];


export default function PropertiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.reveal-hidden');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="reveal reveal-hidden">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Featured Properties
            </p>
            <h2 className="font-display text-section-xl text-foreground">
              Handpicked <span className="italic font-light text-muted-foreground">for you.</span>
            </h2>
          </div>
          <Link
            href="/book-a-viewing"
            className="reveal reveal-hidden inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground transition-colors">
            
            Book a viewing
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Property Cards — 3 col uniform */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties?.map((property, i) =>
          <article
            key={property?.id}
            className="property-card reveal reveal-hidden bg-card rounded-3xl overflow-hidden shadow-card hover-lift"
            style={{ transitionDelay: `${i * 100}ms` }}>
            
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={property?.image}
                alt={property?.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover property-card-img" />
              
                <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${property?.tagColor}`}>
                  {property?.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground leading-tight">
                      {property?.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <Icon name="MapPinIcon" size={14} />
                      {property?.location}
                    </div>
                  </div>
                  <span className="font-display text-xl font-semibold text-foreground whitespace-nowrap ml-2">
                    {property?.price}
                  </span>
                </div>

                {/* Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 mt-4">
                  <span className="flex items-center gap-1">
                    <Icon name="HomeIcon" size={14} />
                    {property?.beds} beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="SparklesIcon" size={14} />
                    {property?.baths} baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="ArrowsPointingOutIcon" size={14} />
                    {property?.sqft} ft²
                  </span>
                </div>

                <Link
                href="/book-a-viewing"
                className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-primary/5 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                
                  Book Viewing
                  <Icon name="CalendarDaysIcon" size={15} />
                </Link>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}
