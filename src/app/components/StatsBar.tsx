'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2400, suffix: '+', label: 'Properties Sold' },
  { value: 18, suffix: ' yrs', label: 'Market Experience' },
  { value: 97, suffix: '%', label: 'Client Satisfaction' },
  { value: 340, suffix: '+', label: 'Active Listings' },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-8 py-6">
      <span className="font-display text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
