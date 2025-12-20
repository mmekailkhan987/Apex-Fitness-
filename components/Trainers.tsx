import React from 'react';
import { ZONES } from '../constants';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

const Zones: React.FC = () => {
  return (
    <section id="zones" className="py-12 md:py-24 bg-black relative">
       {/* Background Noise/Texture */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 md:px-4 md:py-1 rounded-full mb-4">
            <Layers size={10} className="text-apex-red md:w-3 md:h-3" />
            <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">The Battlegrounds</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-black italic uppercase text-white mb-3">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-red to-apex-orange">Zones</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Four specialized environments designed to trigger specific physiological adaptations. 
            Enter the zone that matches your mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {ZONES.map((zone, index) => (
            <motion.div 
              key={zone.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[280px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 hover:border-apex-red/50 transition-all duration-500"
            >
              {/* Image Layer */}
              <div className="absolute inset-0">
                <img 
                  src={zone.image} 
                  alt={zone.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              {/* Content Layer */}
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end items-start">
                 <div className="translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl md:text-4xl font-display font-black uppercase italic text-white mb-2 leading-none">
                        {zone.name}
                    </h3>
                    <div className="h-1 w-8 md:w-12 bg-apex-red mb-2 md:mb-4 group-hover:w-full transition-all duration-500" />
                    
                    <p className="text-gray-300 text-xs md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md hidden md:block">
                        {zone.desc}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed opacity-100 md:hidden block">
                        {zone.desc}
                    </p>
                 </div>
                 
                 <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="bg-white/10 backdrop-blur p-1.5 md:p-2 rounded-full border border-white/20">
                        <ArrowRight className="text-white w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Zones;