import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';
import { CALENDLY_LINK } from '../constants';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      period: "/mo",
      badge: "BASIC",
      features: ["Gym access (Staffed Hours)", "Group classes included", "Day-use lockers", "Free WiFi", "Access to App"],
      cta: "Start Free Trial",
      variant: "secondary" as const,
      popular: false
    },
    {
      name: "Elite",
      price: "$89",
      period: "/mo",
      badge: "MOST POPULAR",
      features: ["24/7 Unlimited Access", "Everything in Starter", "2 PT Sessions/Month", "Dedicated Locker", "Priority Booking", "Guest Privileges (1/mo)"],
      cta: "Go Elite",
      variant: "primary" as const,
      popular: true
    },
    {
      name: "Champion",
      price: "$149",
      period: "/mo",
      badge: "PREMIUM",
      features: ["Unlimited Personal Training", "Nutrition Coaching", "Body Composition Scans", "Private Shower Suite", "Exclusive Merchandise", "All Elite Benefits"],
      cta: "Become Champion",
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-24 bg-apex-dark relative">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-black italic uppercase mb-3">
            Choose Your <span className="text-apex-red">Plan</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">Invest in yourself. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-start">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative glass-card rounded-3xl p-6 md:p-8 flex flex-col h-full ${
                tier.popular 
                  ? 'border-apex-red shadow-[0_0_40px_rgba(255,0,0,0.2)] md:scale-105 z-10' 
                  : 'hover:border-gray-600 transition-colors'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-apex-red text-white text-[10px] md:text-xs font-black uppercase py-1 px-4 rounded-full tracking-wider shadow-lg">
                  Best Value
                </div>
              )}

              <div className="mb-6 md:mb-8">
                <div className="text-xs md:text-sm font-bold text-gray-500 mb-2 tracking-widest uppercase">{tier.badge}</div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl md:text-5xl font-display font-black italic">{tier.price}</span>
                  <span className="text-gray-400 mb-2 font-medium text-sm md:text-base">{tier.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 md:space-y-4 mb-6 md:mb-8">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="bg-white/10 rounded-full p-1 mt-0.5">
                       <Check size={10} className="text-apex-gold md:w-3 md:h-3" />
                    </div>
                    <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button href={CALENDLY_LINK} variant={tier.variant} fullWidth>
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;