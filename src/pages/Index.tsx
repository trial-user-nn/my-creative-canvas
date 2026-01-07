import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PenLine, BookOpen, Megaphone } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  { icon: PenLine, title: 'Articles & Blog Posts', description: 'Engaging content that informs and inspires' },
  { icon: BookOpen, title: 'Books & Publications', description: 'Long-form narratives that captivate readers' },
  { icon: Megaphone, title: 'Copywriting', description: 'Persuasive copy that converts' },
];

export default function Index() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-accent font-medium mb-4"
            >
              Writer & Content Creator
            </motion.p>
            
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-semibold text-foreground mb-6 leading-tight"
            >
              Words that move,
              <br />
              <span className="text-muted-foreground">stories that stay.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              I craft compelling narratives for brands, publications, and readers who believe 
              in the power of well-chosen words. From articles to books to marketing copy, 
              I bring ideas to life through thoughtful storytelling.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link to="/work">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Versatile writing services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border text-center"
              >
                <service.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                Featured Work
              </h2>
              <p className="text-muted-foreground">
                A selection of my recent projects
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/work">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What Clients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted by brands and publications worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Let's Create Something Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Have a project in mind? I'd love to hear about it and explore how we can bring your ideas to life.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
