'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const services = [
{
  id: 'buy',
  title: 'Buy',
  tagline: 'Find your dream property',
  description:
  'Access thousands of verified listings across London. Our agents guide you from first search to final key handover.',
  icon: 'HomeIcon',
  span: 'col-span-2',
  image: "https://images.unsplash.com/photo-1721902024689-c1d1bff5433d",
  imageAlt: 'Bright airy living room with floor-to-ceiling windows, modern furnishings, and natural light streaming in from a sunny London street',
  dark: false
},
{
  id: 'sell',
  title: 'Sell',
  tagline: 'Achieve the best price',
  description:
  'Market-leading valuations, professional photography, and a network of qualified buyers ready to move.',
  icon: 'CurrencyPoundIcon',
  span: 'col-span-1',
  image: null,
  imageAlt: '',
  dark: true
},
{
  id: 'rent',
  title: 'Rent',
  tagline: 'Flexible rental solutions',
  description:
  'From studio apartments to family homes, find the right rental with fully managed tenancy support.',
  icon: 'KeyIcon',
  span: 'col-span-1',
  image: null,
  imageAlt: '',
  dark: false
},
{
  id: 'invest',
  title: 'Invest',
  tagline: 'Grow your portfolio',
  description:
  'Identify high-yield properties with our investment advisory service and proprietary market data.',
  icon: 'ChartBarIcon',
  span: 'col-span-2',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10a973bc1-1772198533706.png",
  imageAlt: 'Glass and steel office towers in London financial district at dusk, reflecting golden light against a deep blue sky',
  dark: true
}];


export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal-hidden');
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
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="reveal reveal-hidden">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              What We Do
            </p>
            <h2 className="font-display text-section-xl text-foreground">
              Services built<br />
              <span className="italic font-light text-muted-foreground">for every journey.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="reveal reveal-hidden inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground transition-colors">
            
            View all services
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Bento Grid — 3 cols */}
        {/* 
           BENTO AUDIT:
           Array: [BuyCard cs-2, SellCard cs-1, RentCard cs-1, InvestCard cs-2]
           Row 1 (3 cols): [col-1+2: BuyCard cs-2] [col-3: SellCard cs-1]
           Row 2 (3 cols): [col-1: RentCard cs-1] [col-2+3: InvestCard cs-2]
           Placed 4/4 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) =>
          <div
            key={service.id}
            className={`reveal reveal-hidden md:${service.span} rounded-3xl overflow-hidden relative min-h-[280px] hover-lift cursor-pointer group`}
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              {/* Background */}
              {service.image ?
            <div className="absolute inset-0">
                  <AppImage
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover property-card-img" />
              
                  <div className={`absolute inset-0 ${service.dark ? 'bg-primary/75' : 'bg-foreground/40'}`} />
                </div> :

            <div className={`absolute inset-0 ${service.dark ? 'bg-primary' : 'bg-muted'}`} />
            }

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  service.dark ?
                  'bg-white/10 text-white' :
                  service.image ?
                  'bg-white/15 text-white' : 'bg-primary/10 text-primary'}`
                  }>
                  
                    <Icon name={service.icon as 'HomeIcon'} size={22} />
                  </div>
                  <span
                  className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
                  service.dark || service.image ?
                  'bg-white/10 text-white/70' : 'bg-primary/8 text-muted-foreground'}`
                  }>
                  
                    {service.tagline}
                  </span>
                </div>
                <div>
                  <h3
                  className={`font-display text-4xl font-medium mb-3 ${
                  service.dark || service.image ? 'text-white' : 'text-foreground'}`
                  }>
                  
                    {service.title}
                  </h3>
                  <p
                  className={`text-sm leading-relaxed max-w-xs ${
                  service.dark || service.image ? 'text-white/65' : 'text-muted-foreground'}`
                  }>
                  
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
