export type ProjectCategory = 'articles' | 'books' | 'copywriting';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  excerpt: string;
  link?: string;
  featured?: boolean;
  date: string;
  publication?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  articles: 'Blog Posts & Articles',
  books: 'Books & Publications',
  copywriting: 'Copywriting & Marketing',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'The Art of Storytelling in the Digital Age',
    category: 'articles',
    description: 'An exploration of how narrative techniques have evolved with the rise of digital media and social platforms.',
    excerpt: 'In an era where attention spans are measured in seconds, the ancient art of storytelling has undergone a remarkable transformation...',
    link: '#',
    featured: true,
    date: '2024',
    publication: 'Medium',
  },
  {
    id: '2',
    title: 'Whispers of the Old City',
    category: 'books',
    description: 'A novel exploring the interconnected lives of five strangers in a rapidly changing urban landscape.',
    excerpt: 'Set against the backdrop of a historic city facing modernization, this novel weaves together stories of love, loss, and rediscovery...',
    link: '#',
    featured: true,
    date: '2023',
  },
  {
    id: '3',
    title: 'Brand Voice Guide for TechStart Inc.',
    category: 'copywriting',
    description: 'Comprehensive brand messaging and voice guidelines for an emerging technology startup.',
    excerpt: 'Developed a complete brand identity including tone of voice, messaging frameworks, and content templates...',
    link: '#',
    featured: true,
    date: '2024',
  },
  {
    id: '4',
    title: 'Finding Creativity in Constraints',
    category: 'articles',
    description: 'How limitations can spark innovation and lead to more creative solutions in writing.',
    excerpt: 'When we think of creativity, we often imagine boundless freedom. Yet some of the most innovative work emerges from constraints...',
    link: '#',
    date: '2024',
    publication: 'The Writing Life',
  },
  {
    id: '5',
    title: 'Letters from Nowhere',
    category: 'books',
    description: 'A collection of short stories inspired by found photographs and forgotten correspondence.',
    excerpt: 'Each story in this collection began with a single image—a faded photograph, a torn postcard, a letter never sent...',
    link: '#',
    date: '2022',
  },
  {
    id: '6',
    title: 'Email Campaign: Sustainable Living',
    category: 'copywriting',
    description: 'A 12-part email sequence for an eco-friendly lifestyle brand, achieving 42% open rate.',
    excerpt: 'Crafted compelling narratives around sustainable living, connecting product benefits to deeper values of environmental stewardship...',
    link: '#',
    date: '2024',
  },
  {
    id: '7',
    title: 'The Writer\'s Morning Ritual',
    category: 'articles',
    description: 'Exploring the morning routines of successful writers throughout history.',
    excerpt: 'From Hemingway\'s sunrise sessions to Toni Morrison\'s predawn writing hours, the morning ritual has long been sacred to writers...',
    link: '#',
    date: '2023',
    publication: 'Creative Quarterly',
  },
  {
    id: '8',
    title: 'Website Copy: Artisan Coffee Roasters',
    category: 'copywriting',
    description: 'Complete website content for a specialty coffee brand, from homepage to product descriptions.',
    excerpt: 'Created warm, inviting copy that tells the story behind each blend while driving conversions and building brand loyalty...',
    link: '#',
    date: '2023',
  },
];
