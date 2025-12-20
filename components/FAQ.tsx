import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-4 md:py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-sm md:text-lg font-bold transition-colors ${isOpen ? 'text-apex-red' : 'text-white group-hover:text-gray-300'} pr-4`}>
          {question}
        </span>
        <span className={`text-apex-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={16} className="md:w-6 md:h-6" /> : <Plus size={16} className="md:w-6 md:h-6" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 md:pb-6 text-gray-400 text-xs md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Do you offer day passes?", a: "Yes! $20 for a day pass. Experience the facility before committing to a membership. The fee is credited back if you join within 7 days." },
    { q: "What's included in personal training?", a: "One-on-one sessions with certified trainers, custom workout programs tailored to your physiology, nutritional guidance with meal planning, and bi-weekly body composition analysis." },
    { q: "Can I freeze my membership?", a: "Absolutely. You can freeze your membership for up to 3 months per year for medical reasons, travel, or personal circumstances with a simple email request." },
    { q: "Do you have showers and lockers?", a: "Yes, we offer premium showers with luxury toiletries. Day-use lockers are free for all members. Dedicated private lockers with laundry service are available for Elite and Champion tier members." },
    { q: "What's your cancellation policy?", a: "We believe you should stay because you want to, not because you have to. All memberships are month-to-month with a simple 30-day cancellation notice." },
    { q: "Is there parking?", a: "Yes, we have a free private parking lot with 50+ spaces exclusively for members. We also have secure indoor bike racks." }
  ];

  return (
    <section id="faq" className="py-12 md:py-24 bg-apex-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-black italic uppercase text-center mb-8 md:mb-12 text-white">
          Frequently Asked <span className="text-white/50">Questions</span>
        </h2>
        <div className="bg-black/50 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/5">
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;