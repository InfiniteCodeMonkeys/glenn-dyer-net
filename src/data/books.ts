import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export interface BookTestimonial {
  quote: string;
  source: string;
  outlet: string;
}

export interface BookPurchaseLinks {
  hardcover?: string;
  paperback?: string;
  ebook?: string;
  audiobook?: string;
}

export interface Book {
  id: string;
  number: number;
  title: string;
  year: string;
  coverImage: string;
  briefDescription: string;
  fullDescription: string;
  interstitialQuote: string;
  genre: string;
  setting: string;
  buyLink?: string;
  trailerUrl?: string;
  purchaseLinks: BookPurchaseLinks;
  testimonials: BookTestimonial[];
}

const reader = createReader(process.cwd(), keystaticConfig);

export async function getBooks(): Promise<Book[]> {
  const entries = await reader.collections.books.all();
  return entries
    .map(({ slug, entry }) => ({
      id: slug,
      number: entry.number ?? 0,
      title: entry.title,
      year: entry.year ?? '',
      coverImage: entry.coverImage ?? '',
      briefDescription: entry.briefDescription ?? '',
      fullDescription: entry.fullDescription ?? '',
      interstitialQuote: entry.interstitialQuote ?? '',
      genre: entry.genre ?? '',
      setting: entry.setting ?? '',
      buyLink: entry.buyLink ?? undefined,
      trailerUrl: entry.trailerUrl ?? undefined,
      purchaseLinks: {
        hardcover: entry.purchaseLinks?.hardcover ?? undefined,
        paperback: entry.purchaseLinks?.paperback ?? undefined,
        ebook: entry.purchaseLinks?.ebook ?? undefined,
        audiobook: entry.purchaseLinks?.audiobook ?? undefined,
      },
      testimonials: (entry.testimonials ?? []).map((t) => ({
        quote: t.quote ?? '',
        source: t.source ?? '',
        outlet: t.outlet ?? '',
      })),
    }))
    .sort((a, b) => a.number - b.number);
}

export async function getBook(id: string): Promise<Book | undefined> {
  const books = await getBooks();
  return books.find((b) => b.id === id);
}
