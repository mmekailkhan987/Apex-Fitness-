import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="bg-gray-900/80 border border-gray-800 p-4 md:p-6 rounded-2xl mb-4 md:mb-6 backdrop-blur-sm break-inside-avoid">
    <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">"{t.content}"</p>
    <div className="flex items-center gap-3">
       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-apex-red/20 flex items-center justify-center text-apex-red font-bold text-xs md:text-base">
          {t.name.charAt(0)}
       </div>
       <div>
         <div className="font-bold text-white text-sm md:text-base">{t.name}</div>
         <div className="text-[10px] md:text-xs text-gray-500">{t.role}</div>
       </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  // Split testimonials for columns
  const col1 = TESTIMONIALS.slice(0, 4);
  const col2 = TESTIMONIALS.slice(4, 8);
  const col3 = TESTIMONIALS.slice(8, 12);

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 mb-8 md:mb-12 relative z-10">
        <h2 className="text-3xl md:text-6xl font-display font-black italic uppercase text-center mb-4">
          What Our <span className="text-apex-gold">Members Say</span>
        </h2>
      </div>

      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        {/* Gradients to hide edges */}
        <div className="absolute top-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-black to-transparent z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          
          {/* Column 1 */}
          <div className="animate-scroll-slow">
            {[...col1, ...col1].map((t, i) => <TestimonialCard key={`c1-${i}`} t={t} />)}
          </div>
          
          {/* Column 2 (Mobile hidden, Tablet visible) */}
          <div className="hidden md:block animate-scroll-medium">
             {[...col2, ...col2].map((t, i) => <TestimonialCard key={`c2-${i}`} t={t} />)}
          </div>

          {/* Column 3 (Desktop visible) */}
          <div className="hidden lg:block animate-scroll-fast">
             {[...col3, ...col3].map((t, i) => <TestimonialCard key={`c3-${i}`} t={t} />)}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;