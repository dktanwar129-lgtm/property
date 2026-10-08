'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function TestimonialCTA() {
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
      { threshold: 0.1 }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-primary rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-96 h-96 blob-accent opacity-30 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          {/* Large quote icon */}
          <div className="absolute top-10 right-12 opacity-5">
            <Icon name="ChatBubbleLeftRightIcon" size={160} className="text-white" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Testimonial */}
            <div className="reveal reveal-hidden">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-semibold mb-6">
                Client Story
              </p>
              <blockquote className="font-display text-section-lg text-white font-medium italic leading-[1.15] mb-10">
                "Dvista found us our forever home in Kensington in under three weeks. The viewing process was completely seamless."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1a2573a78-1772251097324.png"
                    alt="Portrait of Sophie Hartley, a professional woman in her 40s with warm smile"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full" />
                  
                </div>
                <div>
                  <p className="font-semibold text-white text-base">Sophie Hartley</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-medium">
                    Buyer · Kensington, W8
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Panel */}
            <div className="reveal reveal-hidden flex flex-col justify-between gap-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                { num: '48hrs', label: 'Average response time' },
                { num: '£0', label: 'Buyer agent fee' },
                { num: '12min', label: 'To book a viewing' },
                { num: '100%', label: 'Verified listings' }]?.
                map((stat) =>
                <div key={stat?.label} className="bg-white/8 rounded-2xl p-5 border border-white/10">
                    <p className="font-display text-2xl font-semibold text-white">{stat?.num}</p>
                    <p className="text-xs text-white/50 mt-1 uppercase tracking-wider font-medium">{stat?.label}</p>
                  </div>
                )}
              </div>
              <Link
                href="/book-a-viewing"
                className="group w-full flex items-center justify-center gap-3 py-5 bg-accent text-accent-foreground rounded-full text-base font-semibold hover:shadow-accent transition-all duration-300 hover:scale-[1.01]">
                
                Schedule Your Viewing Today
                <Icon name="ArrowRightIcon" size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
