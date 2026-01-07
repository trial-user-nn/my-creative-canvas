import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project, categoryLabels } from '@/data/projects';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {categoryLabels[project.category]}
          </Badge>
          <span className="text-sm text-muted-foreground">{project.date}</span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {project.publication && (
          <p className="text-sm text-muted-foreground mb-2">
            Published in {project.publication}
          </p>
        )}

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          Read more <ExternalLink size={14} />
        </div>
      </a>
    </motion.article>
  );
}
