import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "Member since 2023" or Age
  content: string;
}

export interface Zone {
  id: number;
  name: string;
  desc: string;
  image: string;
  icon?: string;
}

export interface ClassSession {
  time: string;
  name: string;
  instructor: string;
  intensity: 'High' | 'Medium' | 'Low';
}

export interface Transformation {
  id: number;
  name: string;
  detail: string;
  stats: string;
  quote: string;
  imageBefore: string;
  imageAfter: string;
}

export interface Feature {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  color: 'red' | 'orange' | 'gold';
}