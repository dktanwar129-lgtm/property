'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef?.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div
        ref={parallaxRef}
        className="parallax-img absolute inset-0 w-full h-[115%] -top-[7%]">
        
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1435908bb-1772934812375.png"
          alt="Bright modern London townhouse exterior with white facade, large windows, and manicured garden on a sunny afternoon"
          fill
          priority
          sizes="100vw"
          className="object-cover" />
        
      </div>

      {/* Gradient scrim — strong at bottom where white text lives */}
      <div className="absolute inset-0 gradient-overlay" />
      {/* Subtle grain */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-36 pb-20 flex flex-col items-start justify-end min-h-screen">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm text-white/80 mb-7 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            London's Premier Property Specialists
          </div>

          {/* H1 */}
          <h1 className="font-display text-hero-xl text-white mb-6 font-medium">
            Find your<br />
            <span className="italic font-light opacity-80">perfect</span> home.
          </h1>

          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
            Dvista guides buyers, sellers, and renters through London's property market with expert advice and a seamless booking experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-a-viewing"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full text-base font-semibold hover:shadow-accent transition-all duration-300 hover:scale-[1.02]">
              
              Book a Viewing
              <Icon name="ArrowRightIcon" size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 text-white border border-white/25 rounded-full text-base font-semibold hover:bg-white/25 transition-all duration-300 backdrop-blur-sm">
              
              Our Services
            </Link>
          </div>
        </div>

        {/* Floating Property Card */}
        <div className="absolute bottom-12 right-6 md:right-12 glass-card rounded-3xl p-6 shadow-card-xl max-w-xs hidden md:block">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                Latest Listing
              </p>
              <h4 className="text-base font-display font-medium text-foreground">
                Kensington Mews
              </h4>
              <p className="text-sm text-muted-foreground">3 bed · 2 bath · 1,240 sq ft</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent">
              <Icon name="HomeIcon" size={18} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-semibold text-foreground">£1.85M</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
              Available
            </span>
          </div>
          <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent w-[72%] rounded-full" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">72% interest — 4 viewings this week</p>
        </div>
      </div>
    </section>);

}
