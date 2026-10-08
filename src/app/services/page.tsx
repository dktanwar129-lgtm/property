import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Services — Dvista',
  description: 'Buy, sell, rent, or invest in London property with Dvista — expert guidance at every step, from first search to completion.',
};

const services = [
  {
    id: 'buy',
    title: 'Buy',
    icon: 'HomeIcon',
    tagline: 'Find your dream property',
    description:
      'Access thousands of verified listings across London, from period conversions to new-build penthouses. Our agents guide you from first search to final key handover — with straight answers at every step.',
    points: ['Verified, up-to-date listings', 'Dedicated buying agent', 'Mortgage & survey introductions', 'Support through to completion'],
  },
  {
    id: 'sell',
    title: 'Sell',
    icon: 'CurrencyPoundIcon',
    tagline: 'Achieve the best price',
    description:
      'Market-leading valuations, professional photography, and a network of qualified buyers ready to move — so your property sells for what it is actually worth.',
    points: ['Free instant valuation', 'Professional photography & floorplans', 'Access to our buyer network', 'No sale, no fee'],
  },
  {
    id: 'rent',
    title: 'Rent',
    icon: 'KeyIcon',
    tagline: 'Flexible rental solutions',
    description:
      'From studio apartments to family homes, find the right rental with fully managed tenancy support — referencing, contracts, and maintenance handled for you.',
    points: ['Fully managed tenancies', 'Referencing & contract handling', 'Ongoing maintenance support', 'Flexible lease terms'],
  },
  {
    id: 'invest',
    title: 'Invest',
    icon: 'ChartBarIcon',
    tagline: 'Grow your portfolio',
    description:
      'Identify high-yield properties with our investment advisory service and proprietary market data — built for landlords and portfolio investors who want numbers, not guesswork.',
    points: ['Yield & growth forecasting', 'Off-market opportunities', 'Portfolio strategy reviews', 'Ongoing market reporting'],
  },
];

const process = [
  { step: '01', title: 'Tell us what you need', desc: 'A short call or form to understand your goals, budget, and timeline.' },
  { step: '02', title: 'We shortlist & advise', desc: 'Curated options or valuations, backed by current market data.' },
  { step: '03', title: 'Viewings & negotiation', desc: 'We arrange viewings and handle offers or tenant negotiations for you.' },
  { step: '04', title: 'Completion', desc: 'From paperwork to keys, we stay involved until it is done.' },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-24">
        {/* Page hero */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
            What We Do
          </p>
          <h1 className="font-display text-section-xl text-foreground max-w-2xl">
            Services built <span className="italic font-light text-muted-foreground">for every journey.</span>
          </h1>
        </div>

        {/* Service blocks */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 mb-20">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card rounded-3xl shadow-card p-8 md:p-12"
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Icon name={service.icon as 'HomeIcon'} size={26} />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                  {service.tagline}
                </p>
                <h2 className="font-display text-4xl font-medium text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Icon name="CheckCircleIcon" size={16} className="text-accent flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`h-56 md:h-full min-h-[220px] rounded-2xl bg-muted flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <Icon name={service.icon as 'HomeIcon'} size={72} className="text-muted-foreground/25" />
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
            How It Works
          </p>
          <h2 className="font-display text-section-lg text-foreground mb-12 max-w-xl">
            Simple, guided, <span className="italic font-light text-muted-foreground">start to finish.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="step-card bg-card rounded-3xl shadow-card p-6">
                <span className="font-display text-3xl font-semibold text-accent/40">{p.step}</span>
                <h3 className="font-display text-lg font-medium text-foreground mt-4 mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-primary rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-section-lg text-primary-foreground mb-2">
                Ready to get started?
              </h2>
              <p className="text-primary-foreground/70 text-sm">
                Book a viewing or speak to our team today.
              </p>
            </div>
            <Link
              href="/book-a-viewing"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Book a Viewing
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
