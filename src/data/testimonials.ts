export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Working with this writer was transformative for our brand. They captured our voice perfectly and helped us connect with our audience in ways we never imagined possible.",
    author: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'TechStart Inc.',
  },
  {
    id: '2',
    quote: "A rare talent who combines beautiful prose with strategic thinking. Every piece delivered exceeded our expectations and drove real results.",
    author: 'James Chen',
    role: 'Founder & CEO',
    company: 'Artisan Coffee Roasters',
  },
  {
    id: '3',
    quote: "Their articles have become some of our most-read content. The ability to make complex topics accessible while maintaining depth is truly impressive.",
    author: 'Emily Rodriguez',
    role: 'Editor-in-Chief',
    company: 'The Writing Life',
  },
  {
    id: '4',
    quote: "An absolute pleasure to work with. Professional, creative, and always delivers on time. Our email open rates increased by 40% after implementing their copy.",
    author: 'Michael Torres',
    role: 'E-commerce Manager',
    company: 'Sustainable Living Co.',
  },
];
