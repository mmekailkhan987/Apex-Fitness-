import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { CALENDLY_LINK } from '../constants';
import { ChevronRight, Play } from 'lucide-react';

const MeshBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const cols = 20;
      const rows = 20;
      const tileW = width / cols;
      const tileH = height / rows;

      ctx.strokeStyle = 'rgba(255, 69, 0, 0.15)';
      ctx.lineWidth = 1;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * tileW;
          const y = j * tileH;
          const dist = Math.sqrt(Math.pow(i - cols/2, 2) + Math.pow(j - rows/2, 2));
          
          const cx = width / 2;
          const cy = height / 2;
          const u = (i / cols) * 2 - 1;
          const v = (j / rows) * 2 - 1;
          const z = Math.sin(u * 2 + time) * Math.cos(v * 2 + time) * 0.5;
          const fov = 300;
          const scale = fov / (2 - z);
          
          const px = cx + u * width * 0.8 * scale;
          const py = cy + v * height * 0.8 * scale;
          
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 69, 0, ${0.5 + z * 0.5})`;
          ctx.arc(px, py, 2 * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for(let p = 0; p < 30; p++) {
         const px = (Math.sin(p * 50 + time * 0.5) * 0.5 + 0.5) * width;
         const py = (Math.cos(p * 30 + time * 0.3) * 0.5 + 0.5) * height;
         ctx.beginPath();
         ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
         ctx.arc(px, py, Math.random() * 3, 0, Math.PI * 2);
         ctx.fill();
      }

      time += 0.02;
      requestAnimationFrame(draw);
    };

    const animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full opacity-60" />;
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90svh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20">
      <MeshBackground />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-80 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-apex-red/20 border border-apex-red/50 rounded-full px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md"
          >
            <span className="animate-pulse w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-apex-red" />
            <span className="text-apex-red text-[10px] md:text-xs font-bold tracking-widest uppercase">Limited Spots Available</span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] md:leading-[0.9] tracking-tighter italic">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">TRANSFORM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-apex-red to-apex-orange">DOMINATE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-apex-orange to-apex-gold">UNSTOPPABLE</span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-xl border-l-2 md:border-l-4 border-apex-red pl-4 md:pl-6 leading-relaxed">
            State-of-the-art equipment. Elite trainers. A community that pushes you beyond your limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <Button href={CALENDLY_LINK} size="lg" className="w-full sm:w-auto shadow-[0_0_40px_rgba(255,0,0,0.3)]">
              Start Free Trial <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
            </Button>
            <Button href={CALENDLY_LINK} variant="outline" size="lg" className="w-full sm:w-auto">
              Book Gym Tour
            </Button>
          </div>

          <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                   <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Member" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span>⭐ 500+ Members Transformed</span>
          </div>
        </motion.div>

        {/* Right Content - Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block perspective-1000"
        >
             {/* Abstract Floating Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-apex-red/20 rounded-full blur-[100px] animate-pulse-slow" />
             
             <div className="relative z-10 w-[320px] mx-auto rotate-[-5deg] hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Phone Frame */}
                <div className="bg-black rounded-[3rem] border-4 border-gray-800 p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden h-[600px] relative">
                    {/* Mock App UI */}
                    <img 
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
                      alt="Workout App" 
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                       <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/10">
                          <div className="flex justify-between items-center mb-2">
                             <span className="text-xs font-bold text-apex-gold">CURRENT SESSION</span>
                             <span className="text-xs text-white bg-red-600 px-2 py-0.5 rounded">LIVE</span>
                          </div>
                          <div className="text-2xl font-black italic">HIIT BURN</div>
                          <div className="text-sm text-gray-300">145 BPM | 450 CAL</div>
                       </div>
                       <div className="flex gap-2">
                          <button className="flex-1 bg-apex-red text-white py-3 rounded-lg font-bold text-sm">RESUME</button>
                       </div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 -right-4 bg-black/80 backdrop-blur border border-apex-gold/30 p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-xs"
             >
                <div className="bg-apex-gold/20 p-2 rounded-full text-apex-gold">
                   <Play size={20} fill="currentColor" />
                </div>
                <div>
                   <div className="text-xs text-gray-400 font-bold uppercase">Workouts Completed</div>
                   <div className="text-xl font-black text-white">12,450+</div>
                </div>
             </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;