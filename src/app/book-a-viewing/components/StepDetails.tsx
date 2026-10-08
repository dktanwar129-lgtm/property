'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { BookingData } from './BookingFlow';

interface Props {
  data: BookingData;
  onChange: (updates: Partial<BookingData>) => void;
  onBack: () => void;
  onConfirm: () => void;
}

export default function StepDetails({ data, onChange, onBack, onConfirm }: Props) {
  const canConfirm =
    data.firstName.trim() &&
    data.lastName.trim() &&
    data.email.trim() &&
    data.phone.trim();

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-foreground mb-2">
        Your Details
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">
        We'll send your booking confirmation to this email.
      </p>

      {/* Booking Summary */}
      <div className="bg-muted/50 rounded-2xl p-5 mb-8 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 text-sm">
          <Icon name="HomeIcon" size={15} className="text-accent" />
          <span className="font-medium text-foreground capitalize">{data.propertyType || '—'}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Icon name="MapPinIcon" size={15} className="text-accent" />
          <span className="font-medium text-foreground">{data.location || '—'}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Icon name="CalendarDaysIcon" size={15} className="text-accent" />
          <span className="font-medium text-foreground">{data.date || '—'}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Icon name="ClockIcon" size={15} className="text-accent" />
          <span className="font-medium text-foreground">{data.time || '—'}</span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
            <input
              type="text"
              value={data.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              placeholder="Sophie"
              className="w-full bg-background border-2 border-border rounded-2xl px-4 py-3.5 text-foreground text-sm focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
            <input
              type="text"
              value={data.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              placeholder="Hartley"
              className="w-full bg-background border-2 border-border rounded-2xl px-4 py-3.5 text-foreground text-sm focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="sophie@example.co.uk"
            className="w-full bg-background border-2 border-border rounded-2xl px-4 py-3.5 text-foreground text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="+44 7700 900000"
            className="w-full bg-background border-2 border-border rounded-2xl px-4 py-3.5 text-foreground text-sm focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Additional Notes</label>
          <textarea
            value={data.message}
            onChange={(e) => onChange({ message: e.target.value })}
            placeholder="Any specific requirements or questions for your viewing…"
            rows={3}
            className="w-full bg-background border-2 border-border rounded-2xl px-4 py-3.5 text-foreground text-sm focus:border-accent focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        <button
          onClick={onBack}
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full border-2 border-border text-foreground font-semibold text-base hover:bg-muted transition-all duration-300"
        >
          <Icon name="ArrowLeftIcon" size={18} />
          Back
        </button>
        <button
          onClick={onConfirm}
          disabled={!canConfirm}
          className="flex-[2] flex items-center justify-center gap-3 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-accent transition-all duration-300 hover:scale-[1.01]"
        >
          Confirm Booking
          <Icon name="CheckCircleIcon" size={18} />
        </button>
      </div>
    </div>
  );
}
