import { Clock, Trophy, Dumbbell, Users, TrendingUp, ShowerHead } from 'lucide-react';
import { Feature, Testimonial, Zone, ClassSession, Transformation } from './types';

export const CALENDLY_LINK = "https://calendly.com/opraxai-founder/30min";

export const FEATURES: Feature[] = [
  {
    icon: Clock,
    badge: "ALWAYS OPEN",
    title: "Train Anytime",
    description: "Your schedule, your rules. Full access 24/7/365.",
    color: 'red'
  },
  {
    icon: Trophy,
    badge: "CERTIFIED PROS",
    title: "Expert Coaching",
    description: "Certified trainers with 10+ years experience in strength & nutrition.",
    color: 'orange'
  },
  {
    icon: Dumbbell,
    badge: "TOP TIER",
    title: "Best Equipment",
    description: "Rogue, Hammer Strength, Concept2 - only the best brands.",
    color: 'gold'
  },
  {
    icon: Users,
    badge: "40+ WEEKLY",
    title: "High-Energy Classes",
    description: "HIIT, Boxing, Yoga, Spin, CrossFit - expert-led sessions daily.",
    color: 'red'
  },
  {
    icon: TrendingUp,
    badge: "PROVEN",
    title: "Results Guaranteed",
    description: "Custom 12-week programs designed for YOUR goals.",
    color: 'orange'
  },
  {
    icon: ShowerHead,
    badge: "PREMIUM",
    title: "5-Star Amenities",
    description: "Saunas, cold plunge, massage chairs, premium showers.",
    color: 'gold'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Sarah M.", role: "Age 29", content: "I've been to 5 gyms in this city. Apex is the only one that feels like a second home." },
  { id: 2, name: "James T.", role: "Age 42", content: "The trainers actually care. They remember your name, your goals, your progress." },
  { id: 3, name: "Alicia R.", role: "Age 31", content: "Best equipment I've ever used. Everything is brand new and well-maintained." },
  { id: 4, name: "Derek L.", role: "Age 38", content: "The 5am crew is like family now. We push each other every day." },
  { id: 5, name: "Monica P.", role: "Age 45", content: "Lost 60 pounds here. Changed my entire life." },
  { id: 6, name: "Chris K.", role: "Age 27", content: "The group classes are intense but addictive. I'm hooked." },
  { id: 7, name: "Ryan B.", role: "Age 33", content: "24/7 access is a game changer for my schedule. I lift at 11pm sometimes." },
  { id: 8, name: "Amanda S.", role: "Age 29", content: "The sauna and cold plunge recovery is next level." },
  { id: 9, name: "Lisa H.", role: "Age 36", content: "Finally found a gym that's not intimidating. Everyone is supportive." },
  { id: 10, name: "Marcus J.", role: "Age 41", content: "The personal trainers know their stuff. Real science, not bro-science." },
  { id: 11, name: "David W.", role: "Age 39", content: "It's expensive but worth every penny. You get what you pay for." },
  { id: 12, name: "Jessica L.", role: "Age 34", content: "My kids use the childcare while I train. Perfect setup." },
];

export const ZONES: Zone[] = [
  {
    id: 1,
    name: "The Iron Pit",
    desc: "10,000 sq ft of prime steel. Hammer Strength plate-loaded machines, 8 power racks, and dumbbells up to 150lbs.",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Velocity Lab",
    desc: "Engineered for speed. Woodway treadmills, Assault AirBikes, and Concept2 rowers in a dynamic, low-light environment.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Combat Corner",
    desc: "Sharpen your strikes. Full-size boxing ring, heavy bags, and open mat space for MMA and Jiu-Jitsu drilling.",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Recovery Suite",
    desc: "Repair and rebuild. Infrared saunas, cold plunge tubs (38°F), and Normatec compression lounge.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
  }
];

export const WEEKLY_SCHEDULE: ClassSession[][] = [
  // Simplified for demo: just showing 5 slots for Monday
  [
    { time: "06:00 AM", name: "HIIT Inferno", instructor: "Elena", intensity: "High" },
    { time: "09:00 AM", name: "Power Yoga", instructor: "Sarah", intensity: "Medium" },
    { time: "12:00 PM", name: "Box & Burn", instructor: "Marcus", intensity: "High" },
    { time: "05:00 PM", name: "CrossFit WOD", instructor: "Jake", intensity: "High" },
    { time: "07:00 PM", name: "Recovery Flow", instructor: "Elena", intensity: "Low" }
  ]
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    name: "Marcus, 34",
    detail: "6 Months",
    stats: "Lost 45 lbs | Gained 15 lbs muscle",
    quote: "Best decision I ever made.",
    imageBefore: "https://picsum.photos/seed/before1/300/400?grayscale",
    imageAfter: "https://picsum.photos/seed/after1/300/400"
  },
  {
    id: 2,
    name: "Jennifer, 28",
    detail: "4 Months",
    stats: "Lost 22 lbs | 12% Body Fat Drop",
    quote: "The trainers kept me accountable.",
    imageBefore: "https://picsum.photos/seed/before2/300/400?grayscale",
    imageAfter: "https://picsum.photos/seed/after2/300/400"
  },
  {
    id: 3,
    name: "David, 45",
    detail: "1 Year",
    stats: "Bench +100lbs | Pain Free",
    quote: "I feel 20 years younger.",
    imageBefore: "https://picsum.photos/seed/before3/300/400?grayscale",
    imageAfter: "https://picsum.photos/seed/after3/300/400"
  },
  {
    id: 4,
    name: "Sophie, 31",
    detail: "8 Months",
    stats: "Marathon Ready | Core Strength",
    quote: "From couch to marathon.",
    imageBefore: "https://picsum.photos/seed/before4/300/400?grayscale",
    imageAfter: "https://picsum.photos/seed/after4/300/400"
  },
  {
    id: 5,
    name: "Michael, 26",
    detail: "3 Months",
    stats: "Gained 12 lbs Lean Mass",
    quote: "Finally seeing definition.",
    imageBefore: "https://picsum.photos/seed/before5/300/400?grayscale",
    imageAfter: "https://picsum.photos/seed/after5/300/400"
  },
  {
    id: 6,
    name: "Emma, 39",
    detail: "5 Months",
    stats: "Post-Pregnancy Recovery",
    quote: "I have my confidence back.",
    imageBefore: "https://picsum.photos/seed/before6/300/400?grayscale",
    imageAfter: "https://picsum.photos/seed/after6/300/400"
  }
];