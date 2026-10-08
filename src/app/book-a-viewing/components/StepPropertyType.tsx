'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { BookingData } from './BookingFlow';

const propertyTypes = [
  { id: 'house', label: 'House', icon: 'HomeIcon', desc: 'Terraced, semi or detached' },
  { id: 'flat', label: 'Flat / Apartment', icon: 'BuildingOfficeIcon', desc: 'Studio to penthouse' },
  { id: 'commercial', label: 'Commercial', icon: 'BuildingStorefrontIcon', desc: 'Office, retail & more' },
  { id: 'land', label: 'Land / Development', icon: 'MapIcon', desc: 'Plots and development sites' },
];

const locations = [
  'Kensington & Chelsea',
  'Mayfair & Belgravia',
  'Notting Hill',
  'Chelsea',
  'Fulham',
  'Hampstead',
  'Islington',
  'Shoreditch',
  'Canary Wharf',
  'Richmond',
];

interface Props {
  data: BookingData;
  onChange: (updates: Partial<BookingData>) => void;
  onNext: () => void;
}

export default function StepPropertyType({ data, onChange, onNext }: Props) {
  const canProceed = !!data.propertyType && !!data.location;

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-foreground mb-2">
        What are you looking for?
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">
        Select the property type and preferred area to continue.
      </p>

      {/* Property Type Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {propertyTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onChange({ propertyType: type.id })}
            className={`flex flex-col items-start gap-2 p-5 rounded-2xl border-2 text-left transition-all duration-250 ${
              data.propertyType === type.id
                ? 'border-accent bg-accent/8' :'border-border bg-background hover:border-primary/30 hover:bg-muted/50'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              data.propertyType === type.id ? 'bg-accent/15 text-accent' : 'bg-muted text-muted-foreground'
            }`}>
              <Icon name={type.icon as 'HomeIcon'} size={20} />
            </div>
            <div>
              <p className={`font-semibold text-sm ${data.propertyType === type.id ? 'text-foreground' : 'text-foreground'}`}>
                {type.label}
              </p>
              <p className="text-xs text-muted-foreground">{type.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Location Select */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-foreground mb-3">
          Preferred Location
        </label>
        <div className="relative">
          <select
            value={data.location}
            onChange={(e) => onChange({ location: e.target.value })}
            className="w-full appearance-none bg-background border-2 border-border rounded-2xl px-5 py-4 text-foreground text-sm font-medium focus:border-accent focus:outline-none transition-colors cursor-pointer"
          >
            <option value="" disabled>Select an area…</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
            <Icon name="ChevronDownIcon" size={18} />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canProceed}
        className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary transition-all duration-300"
      >
        Continue to Date & Time
        <Icon name="ArrowRightIcon" size={18} />
      </button>
    </div>
  );
}
