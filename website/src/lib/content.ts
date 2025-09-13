import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', 'content');

export interface ContentMetadata {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  speaker?: string;
  scripture?: string;
  series?: string;
  audioUrl?: string;
  videoUrl?: string;
  transcript?: string;
  summary?: string;
  excerpt?: string;
  category?: string;
  featuredImage?: string;
  tags?: string[];
  published?: boolean;
  lastModified?: string;
  keywords?: string[];
}

export interface ContentItem {
  slug: string;
  metadata: ContentMetadata;
  content: string;
}

export function getContentByType(type: 'pages' | 'sermons' | 'articles' | 'events'): ContentItem[] {
  const typeDirectory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(typeDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDirectory);
  const allContent = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(typeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        metadata: data as ContentMetadata,
        content,
      };
    })
    .filter((item) => item.metadata.published !== false)
    .sort((a, b) => {
      if (a.metadata.date && b.metadata.date) {
        return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
      }
      return 0;
    });

  return allContent;
}

export function getContentBySlug(type: 'pages' | 'sermons' | 'articles' | 'events', slug: string): ContentItem | null {
  const typeDirectory = path.join(contentDirectory, type);
  const fullPath = path.join(typeDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as ContentMetadata,
    content,
  };
}

export function getAllContentSlugs(type: 'pages' | 'sermons' | 'articles' | 'events'): string[] {
  const typeDirectory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(typeDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getContentByTag(type: 'pages' | 'sermons' | 'articles' | 'events', tag: string): ContentItem[] {
  const allContent = getContentByType(type);
  return allContent.filter((item) => 
    item.metadata.tags && item.metadata.tags.includes(tag)
  );
}

export function getContentByCategory(type: 'pages' | 'sermons' | 'articles' | 'events', category: string): ContentItem[] {
  const allContent = getContentByType(type);
  return allContent.filter((item) => 
    item.metadata.category === category
  );
}

export function searchContent(query: string): ContentItem[] {
  const allTypes: ('pages' | 'sermons' | 'articles' | 'events')[] = ['pages', 'sermons', 'articles', 'events'];
  const allContent: ContentItem[] = [];

  allTypes.forEach((type) => {
    allContent.push(...getContentByType(type));
  });

  const searchQuery = query.toLowerCase();
  
  return allContent.filter((item) => 
    item.metadata.title.toLowerCase().includes(searchQuery) ||
    item.metadata.description?.toLowerCase().includes(searchQuery) ||
    item.metadata.summary?.toLowerCase().includes(searchQuery) ||
    item.metadata.excerpt?.toLowerCase().includes(searchQuery) ||
    item.content.toLowerCase().includes(searchQuery) ||
    item.metadata.tags?.some(tag => tag.toLowerCase().includes(searchQuery))
  );
}
