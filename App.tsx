import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TransformationGallery from './components/TransformationGallery';
import Testimonials from './components/Testimonials';
import Schedule from './components/Schedule';
import Zones from './components/Trainers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-black text-white selection:bg-apex-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TransformationGallery />
        <Pricing />
        <Testimonials />
        <Schedule />
        <Zones />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;