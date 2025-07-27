import React from 'react';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function CustomOvermoldSimple() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Custom Overmold - Test Page</h1>
        <p>This is a simple test page to verify the component loads correctly.</p>
      </div>
      <Footer />
    </div>
  );
}