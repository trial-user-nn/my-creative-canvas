import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterTabs } from '@/components/FilterTabs';
import { projects, ProjectCategory } from '@/data/projects';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-accent font-medium mb-4">Portfolio</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              My Work
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A collection of writing projects spanning articles, books, and marketing copy.
              Each piece represents a unique story and collaboration.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
