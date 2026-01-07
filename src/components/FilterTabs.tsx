import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProjectCategory, categoryLabels } from '@/data/projects';

interface FilterTabsProps {
  activeFilter: ProjectCategory | 'all';
  onFilterChange: (filter: ProjectCategory | 'all') => void;
}

const filters: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'articles', label: 'Articles' },
  { value: 'books', label: 'Books' },
  { value: 'copywriting', label: 'Copywriting' },
];

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
            activeFilter === filter.value
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeFilter === filter.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
