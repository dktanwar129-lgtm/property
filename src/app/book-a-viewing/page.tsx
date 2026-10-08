import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingFlow from './components/BookingFlow';

export const metadata: Metadata = {
  title: 'Book a Viewing — PropVista',
  description: 'Schedule your property viewing online in minutes. Choose a property type, pick a date and time, and confirm your details.',
};

export default function BookAViewingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <BookingFlow />
      </main>
      <Footer />
    </>
  );
}
