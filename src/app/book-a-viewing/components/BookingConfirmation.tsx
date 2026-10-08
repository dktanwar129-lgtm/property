'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { BookingData } from './BookingFlow';

interface Props {
  data: BookingData;
  onReset: () => void;
}

export default function BookingConfirmation({ data, onReset }: Props) {
  return (
    <div className="max-w-xl mx-auto px-6 text-center">
      {/* Success Icon */}
      <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-8">
        <Icon name="CheckCircleIcon" size={40} className="text-accent" variant="solid" />
      </div>

      <h1 className="font-display text-section-lg text-foreground mb-4">
        Viewing Confirmed!
      </h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        Thank you, <strong className="text-foreground">{data.firstName}</strong>. Your viewing request has been received. Our team will confirm your appointment within 2 hours.
      </p>

      {/* Booking Details Card */}
      <div className="bg-card rounded-3xl shadow-card p-8 text-left mb-8 space-y-4">
        <h2 className="font-display text-lg font-medium text-foreground mb-5">Booking Summary</h2>
        {[
          { icon: 'HomeIcon', label: 'Property Type', value: data.propertyType },
          { icon: 'MapPinIcon', label: 'Location', value: data.location },
          { icon: 'CalendarDaysIcon', label: 'Date', value: data.date },
          { icon: 'ClockIcon', label: 'Time', value: data.time },
          { icon: 'EnvelopeIcon', label: 'Confirmation to', value: data.email },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-accent flex-shrink-0">
              <Icon name={row.icon as 'HomeIcon'} size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{row.label}</p>
              <p className="text-sm font-semibold text-foreground capitalize">{row.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onReset}
          className="flex-1 py-4 rounded-full border-2 border-border text-foreground font-semibold text-sm hover:bg-muted transition-all duration-300"
        >
          Book Another Viewing
        </button>
        <Link
          href="/"
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-secondary transition-all duration-300"
        >
          Back to Home
          <Icon name="ArrowRightIcon" size={16} />
        </Link>
      </div>
    </div>
  );
}
