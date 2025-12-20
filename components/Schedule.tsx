import React from 'react';
import { WEEKLY_SCHEDULE, CALENDLY_LINK } from '../constants';
import Button from './Button';

const Schedule: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <section id="schedule" className="py-12 md:py-24 bg-apex-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-black italic uppercase text-white">
              Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Schedule</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">Over 40 high-intensity classes per week.</p>
          </div>
          <Button href={CALENDLY_LINK} variant="outline" size="sm">Download PDF</Button>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[700px] md:min-w-[800px] grid grid-cols-8 gap-1">
            {/* Header Row */}
            <div className="bg-transparent p-2 md:p-4"></div> {/* Time Col */}
            {days.map(day => (
              <div key={day} className="bg-gray-900/50 p-2 md:p-4 text-center font-bold text-gray-400 text-xs md:text-sm uppercase tracking-wider rounded-t-lg">
                {day}
              </div>
            ))}

            {/* Time Slots (Demo Logic - repeated for visual density) */}
            {['06:00 AM', '09:00 AM', '12:00 PM', '05:00 PM', '07:00 PM'].map((time, idx) => (
              <React.Fragment key={time}>
                {/* Time Label */}
                <div className="p-2 md:p-4 flex items-center justify-center text-[10px] md:text-xs font-mono text-gray-500 font-bold border-r border-white/5 whitespace-nowrap">
                  {time}
                </div>
                
                {/* Classes for each day */}
                {days.map((day, dIdx) => {
                  // Mock data logic
                  const hasClass = (idx + dIdx) % 3 !== 0; 
                  const classType = ['HIIT', 'Boxing', 'Yoga', 'CrossFit', 'Spin'][ (idx + dIdx) % 5 ];
                  const intensity = ['High', 'Medium', 'Low'][ (idx) % 3 ];
                  const instructor = ['Jake', 'Sarah', 'Elena', 'Marcus'][ (dIdx) % 4 ];
                  
                  if (!hasClass) return <div key={`${day}-${time}`} className="bg-black/40 border border-white/5 rounded-md m-0.5" />;

                  let colorClass = 'bg-gray-800 border-l-2 md:border-l-4 border-gray-600';
                  if (intensity === 'High') colorClass = 'bg-red-900/20 border-l-2 md:border-l-4 border-apex-red hover:bg-red-900/40';
                  if (intensity === 'Medium') colorClass = 'bg-orange-900/20 border-l-2 md:border-l-4 border-apex-orange hover:bg-orange-900/40';
                  if (intensity === 'Low') colorClass = 'bg-yellow-900/20 border-l-2 md:border-l-4 border-apex-gold hover:bg-yellow-900/40';

                  return (
                    <div key={`${day}-${time}`} className={`${colorClass} p-1.5 md:p-3 rounded-md m-0.5 transition-all cursor-pointer group flex flex-col justify-center`}>
                      <div className="font-bold text-white text-[10px] md:text-sm group-hover:text-glow truncate">{classType}</div>
                      <div className="text-[8px] md:text-[10px] text-gray-400 uppercase mt-0.5 md:mt-1 hidden sm:block">{instructor}</div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;