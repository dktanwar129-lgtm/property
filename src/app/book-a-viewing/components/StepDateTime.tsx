'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { BookingData } from './BookingFlow';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

interface Props {
  data: BookingData;
  onChange: (updates: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepDateTime({ data, onChange, onNext, onBack }: Props) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isDateDisabled = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < todayStart || d.getDay() === 0;
  };

  const formatDate = (day: number) =>
    `${String(day).padStart(2, '0')}/${String(viewMonth + 1).padStart(2, '0')}/${viewYear}`;

  const canProceed = !!data.date && !!data.time;

  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-foreground mb-2">
        Choose a date & time
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">
        Select your preferred viewing slot. Sundays unavailable.
      </p>

      {/* Calendar */}
      <div className="bg-background rounded-2xl p-5 mb-6 border border-border">
        {/* Month Nav */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
            <Icon name="ChevronLeftIcon" size={18} />
          </button>
          <span className="font-display font-medium text-foreground">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button onClick={nextMonth} className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
            <Icon name="ChevronRightIcon" size={18} />
          </button>
        </div>

        {/* Day Labels */}
        <div className="grid grid-cols-7 mb-2">
          {dayLabels.map((d) => (
            <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = formatDate(day);
            const disabled = isDateDisabled(day);
            const selected = data.date === dateStr;
            return (
              <button
                key={day}
                disabled={disabled}
                onClick={() => onChange({ date: dateStr, time: '' })}
                className={`aspect-square rounded-xl text-sm font-medium transition-all duration-200 ${
                  selected
                    ? 'bg-primary text-primary-foreground'
                    : disabled
                    ? 'text-muted-foreground/40 cursor-not-allowed'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      {data.date && (
        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-3">
            Available Times — {data.date}
          </p>
          <div className="grid grid-cols-5 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => onChange({ time: slot })}
                className={`time-slot py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  data.time === slot
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'bg-background border-border text-foreground hover:border-accent/50'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full border-2 border-border text-foreground font-semibold text-base hover:bg-muted transition-all duration-300"
        >
          <Icon name="ArrowLeftIcon" size={18} />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="flex-[2] flex items-center justify-center gap-3 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary transition-all duration-300"
        >
          Continue to Details
          <Icon name="ArrowRightIcon" size={18} />
        </button>
      </div>
    </div>
  );
}
