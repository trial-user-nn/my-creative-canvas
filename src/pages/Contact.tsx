import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@yourname.com', href: 'mailto:hello@yourname.com' },
  { icon: MapPin, label: 'Location', value: 'New York, NY' },
  { icon: Clock, label: 'Availability', value: 'Mon - Fri, 9am - 5pm EST' },
];

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
];

export default function Contact() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium mb-4">Contact</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Let's Talk
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Details */}
              <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Follow Along
                </h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Note */}
              <div className="p-6 rounded-lg border-2 border-dashed border-border">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Currently Accepting Projects
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm available for new writing projects starting next month. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
