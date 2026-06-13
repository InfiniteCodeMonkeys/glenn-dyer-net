import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export interface NewsletterPost {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string;
}

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function formatDate(iso: string): string {
  const [year, month] = iso.split('-');
  return `${MONTHS[parseInt(month) - 1]} ${year}`;
}

const reader = createReader(process.cwd(), keystaticConfig);

export async function getNewsletterPosts(): Promise<NewsletterPost[]> {
  const entries = await reader.collections.newsletter.all();
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
      content: entry.content ?? '',
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}
