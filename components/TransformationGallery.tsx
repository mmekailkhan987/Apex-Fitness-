import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Dna, Dumbbell, Zap, ArrowRight } from 'lucide-react';
import Button from './Button';
import { CALENDLY_LINK } from '../constants';

const steps = [
  {
    num: "01",
    title: "Bio-Scan Analysis",
    desc: "Clinical-grade InBody 770 scan and metabolic analysis to map your physiology.",
    icon: ScanFace
  },
  {
    num: "02",
    title: "Genetic Programming",
    desc: "Custom workout plan engineered based on your muscle fiber type and lifestyle data.",
    icon: Dna
  },
  {
    num: "03",
    title: "High-Output Training",
    desc: "Periodized training blocks designed to force adaptation, hypertrophy, and power.",
    icon: Dumbbell
  },
  {
    num: "04",
    title: "Active Regeneration",
    desc: "Cryotherapy chambers, Infrared Saunas, and Pneumatic Compression therapy.",
    icon: Zap
  }
];

const ApexMethodology: React.FC = () => {
  return (
    <section id="methodology" className="py-16 md:py-32 bg-apex-black relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-apex-red/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-apex-orange/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 border border-apex-red/30 bg-apex-red/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6 backdrop-blur-md"
            >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-apex-red animate-pulse"/>
                <span className="text-apex-red text-[10px] md:text-xs font-bold tracking-widest uppercase">The Apex Method</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-display font-black italic uppercase text-white leading-[0.9] mb-4 md:mb-6"
            >
                Engineered For <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-red via-apex-orange to-apex-gold">Perfection</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto"
            >
                We replaced "hope" with science. Our proprietary 4-step blueprint guarantees results by customizing every variable to your biology.
            </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent z-0" />

            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative z-10 group"
                >
                    <div className="bg-zinc-900 border border-white/5 p-6 md:p-8 rounded-3xl h-full hover:border-apex-red/50 hover:bg-zinc-900/80 transition-all duration-300 group-hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-apex-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="mb-6 md:mb-8 relative flex items-center justify-between md:block">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-black border border-gray-800 flex items-center justify-center relative z-10 group-hover:border-apex-red group-hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300">
                                <step.icon className="text-white group-hover:text-apex-red transition-colors w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            {/* Giant Number Background */}
                            <div className="text-6xl md:absolute md:-top-6 md:-right-6 md:text-8xl font-black text-white/5 select-none font-display italic group-hover:text-white/10 transition-colors">
                                {step.num}
                            </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-display font-black italic uppercase text-white mb-2 md:mb-3 group-hover:text-apex-red transition-colors relative z-10">
                            {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-xs md:text-sm relative z-10">
                            {step.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Bottom Stats & CTA */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left order-2 md:order-1 flex md:block justify-center gap-4">
                <div className="text-2xl md:text-3xl font-black italic text-white">12k+</div>
                <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest self-center md:self-auto">Sessions Completed</div>
            </div>
            
            <div className="text-center order-1 md:order-2">
                 <Button href={CALENDLY_LINK} size="lg" className="w-full md:w-auto">
                    Start Your Blueprint <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
            </div>

            <div className="text-center md:text-right order-3 flex md:block justify-center gap-4">
                <div className="text-2xl md:text-3xl font-black italic text-white">98%</div>
                <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest self-center md:self-auto">Goal Achievement Rate</div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ApexMethodology;