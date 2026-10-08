'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import StepPropertyType from './StepPropertyType';
import StepDateTime from './StepDateTime';
import StepDetails from './StepDetails';
import BookingConfirmation from './BookingConfirmation';

export type BookingData = {
  propertyType: string;
  location: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const steps = [
  { id: 1, label: 'Property' },
  { id: 2, label: 'Date & Time' },
  { id: 3, label: 'Your Details' },
];

const initialData: BookingData = {
  propertyType: '',
  location: '',
  date: '',
  time: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>(initialData);
  const [confirmed, setConfirmed] = useState(false);

  const updateData = (updates: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...updates }));
  };

  const next = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const back = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const confirm = () => setConfirmed(true);

  if (confirmed) {
    return <BookingConfirmation data={bookingData} onReset={() => { setConfirmed(false); setCurrentStep(1); setBookingData(initialData); }} />;
  }

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
          Online Booking
        </p>
        <h1 className="font-display text-section-xl text-foreground mb-4">
          Book a <span className="italic font-light text-muted-foreground">Viewing</span>
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Schedule your property visit in minutes. Our team will confirm within 2 hours.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-12 gap-0">
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`booking-step-indicator w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  currentStep === step.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : currentStep > step.id
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'bg-card text-muted-foreground border-border'
                }`}
              >
                {currentStep > step.id ? (
                  <Icon name="CheckIcon" size={16} />
                ) : (
                  step.id
                )}
              </div>
              <span className={`text-xs mt-2 font-medium ${currentStep === step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className={`w-20 h-0.5 mb-5 mx-2 transition-colors duration-500 ${currentStep > step.id ? 'bg-accent' : 'bg-border'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-card rounded-3xl shadow-card-lg p-8 md:p-10">
        {currentStep === 1 && (
          <StepPropertyType data={bookingData} onChange={updateData} onNext={next} />
        )}
        {currentStep === 2 && (
          <StepDateTime data={bookingData} onChange={updateData} onNext={next} onBack={back} />
        )}
        {currentStep === 3 && (
          <StepDetails data={bookingData} onChange={updateData} onBack={back} onConfirm={confirm} />
        )}
      </div>
    </div>
  );
}
