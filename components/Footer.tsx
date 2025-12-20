import React from 'react';
import { Facebook, Instagram, Twitter, Zap } from 'lucide-react';
import Button from './Button';
import { CALENDLY_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-10 md:pt-20 pb-6 md:pb-10">
      <div className="container mx-auto px-4">
        
        {/* Top CTA */}
        <div className="bg-gradient-to-r from-apex-red to-black rounded-2xl md:rounded-3xl p-6 md:p-12 mb-10 md:mb-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-display font-black italic text-white mb-2">READY TO TRANSFORM?</h2>
              <p className="text-white/80 text-sm md:text-lg">Join 500+ members who've changed their lives.</p>
           </div>
           <div className="relative z-10 w-full md:w-auto">
              <Button href={CALENDLY_LINK} size="lg" className="bg-white text-apex-red hover:bg-gray-100 w-full md:w-auto">CLAIM FREE TRIAL</Button>
              <p className="text-center text-white/60 text-[10px] md:text-xs mt-2">No credit card required.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-1">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-apex-red fill-apex-red" />
              <span className="font-display font-black text-xl md:text-2xl tracking-tighter italic text-white">APEX</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Opened 2018. 3x Best Gym Award Winner. We are more than a gym; we are a community dedicated to becoming unstoppable.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-apex-red transition-colors"><Instagram size={16} className="md:w-5 md:h-5" /></a>
               <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-apex-red transition-colors"><Facebook size={16} className="md:w-5 md:h-5" /></a>
               <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-apex-red transition-colors"><Twitter size={16} className="md:w-5 md:h-5" /></a>
            </div>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 md:mb-6 text-sm md:text-base">Classes</h4>
            <ul className="space-y-2 md:space-y-4 text-gray-500 text-sm">
              <li className="hover:text-apex-red cursor-pointer transition-colors">HIIT Inferno</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">Power Boxing</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">Vinyasa Yoga</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">CrossFit WOD</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">Spin Cycle</li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 md:mb-6 text-sm md:text-base">Membership</h4>
            <ul className="space-y-2 md:space-y-4 text-gray-500 text-sm">
              <li className="hover:text-apex-red cursor-pointer transition-colors">View Pricing</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">Book a Tour</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">Corporate Plans</li>
              <li className="hover:text-apex-red cursor-pointer transition-colors">Cancellation Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 md:mb-6 text-sm md:text-base">Contact Us</h4>
            <div className="space-y-2 md:space-y-4 text-gray-500 text-sm">
              <p>1250 Power Street<br/>Downtown, Metro City 10012</p>
              <p className="text-white font-bold">(555) 123-4567</p>
              <p>hello@apexfitness.com</p>
              <div className="pt-2">
                 <div className="text-xs font-bold text-gray-600 uppercase mb-1">Staffed Hours</div>
                 <p className="text-xs">Mon-Fri: 5am - 11pm</p>
                 <p className="text-xs">Sat-Sun: 6am - 10pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-600">
          <p>&copy; 2025 Apex Fitness. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;