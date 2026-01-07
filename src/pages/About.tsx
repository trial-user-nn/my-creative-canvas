import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Users, FileText } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stats = [
  { icon: FileText, value: '50+', label: 'Articles Published' },
  { icon: BookOpen, value: '2', label: 'Books Written' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Award, value: '8+', label: 'Years Experience' },
];

const skills = [
  'Content Strategy',
  'Brand Storytelling',
  'SEO Writing',
  'Copywriting',
  'Long-form Articles',
  'Email Campaigns',
  'Editorial Writing',
  'Creative Fiction',
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-medium mb-4">About Me</p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Telling stories that matter, one word at a time.
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm a writer and content creator with a passion for crafting 
                  narratives that resonate. Over the past eight years, I've had the 
                  privilege of working with brands, publications, and individuals 
                  who share my belief in the transformative power of words.
                </p>
                <p>
                  My journey began with a simple realization: great writing isn't 
                  just about stringing words together—it's about creating connections. 
                  Whether I'm writing a blog post, a book chapter, or brand copy, 
                  my goal is always the same: to make readers feel something.
                </p>
                <p>
                  When I'm not at my desk, you'll find me exploring used bookstores, 
                  drinking too much coffee, or working on my next novel. I believe 
                  that the best stories come from genuine curiosity and a willingness 
                  to see the world from different perspectives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg bg-secondary/50 border border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-serif text-5xl font-semibold text-accent">W</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Your photo here</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-serif text-3xl font-semibold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Approach Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                My Approach
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I believe that effective writing starts with understanding—understanding 
                  your audience, your goals, and the story you want to tell. Before I 
                  write a single word, I immerse myself in your world.
                </p>
                <p>
                  My process is collaborative and iterative. I work closely with clients 
                  to ensure that every piece not only meets their expectations but 
                  exceeds them. Communication is key, and I'm always open to feedback 
                  and refinement.
                </p>
                <p>
                  Whether it's a 500-word blog post or a 50,000-word book, I approach 
                  every project with the same level of care, attention, and commitment 
                  to excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              I'm always excited to take on new projects and collaborate with 
              people who value quality writing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/work">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
