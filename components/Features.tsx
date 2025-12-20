import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-12 md:py-24 relative bg-apex-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-6xl font-display font-black italic uppercase mb-3 text-white">
             World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-red to-apex-orange">Facilities</span>
           </h2>
           <p className="text-gray-400 text-sm md:text-lg">Everything you need to reach your peak potential.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 md:p-8 rounded-3xl glass-card overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-default`}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color === 'gold' ? 'yellow-500' : feature.color === 'orange' ? 'orange-500' : 'red-600'}/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Border Glow */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${feature.color === 'gold' ? 'yellow-500' : feature.color === 'orange' ? 'orange-500' : 'red-600'}/30 rounded-3xl transition-colors duration-300`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-900 flex items-center justify-center mb-5 md:mb-6 text-${feature.color === 'gold' ? 'yellow-400' : feature.color === 'orange' ? 'orange-500' : 'red-500'} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} className="md:w-7 md:h-7" />
                </div>
                
                <div className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 bg-white/5 rounded-full text-[10px] md:text-xs font-bold tracking-wider mb-3 text-gray-300 border border-white/10">
                   {feature.badge}
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold uppercase italic mb-2 md:mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;