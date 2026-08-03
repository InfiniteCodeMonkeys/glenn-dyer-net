import { createReader } from '@keystatic/core/reader';
import Markdoc from '@markdoc/markdoc';
import keystaticConfig from '../../keystatic.config';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function formatDate(iso: string): string {
  const [year, month] = iso.split('-');
  return `${MONTHS[parseInt(month) - 1]} ${year}`;
}

const reader = createReader(process.cwd(), keystaticConfig);

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await reader.collections.blog.all();
  return entries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      date: entry.date ?? '',
      displayDate: entry.date ? formatDate(entry.date) : '',
      category: entry.category ?? '',
      excerpt: entry.excerpt ?? '',
      image: entry.image ?? '',
      imageAlt: entry.imageAlt ?? '',
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Resolves a single post's Markdoc body to an HTML string, ready for `set:html`.
 * The `content` field is a Keystatic content field, so the reader exposes it as
 * an async function returning the parsed Markdoc `{ node }`.
 */
export async function getBlogPostContent(slug: string): Promise<string> {
  const entry = await reader.collections.blog.read(slug);
  if (!entry) return '';
  const { node } = await entry.content();
  return Markdoc.renderers.html(Markdoc.transform(node));
}
