import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="p-6 rounded-lg bg-secondary/50 border border-border"
    >
      <Quote className="w-8 h-8 text-accent/40 mb-4" />
      
      <blockquote className="text-foreground leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="font-serif text-lg font-semibold text-accent">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
