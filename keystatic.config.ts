import { config, collection, fields } from '@keystatic/core';

export default config({
  storage:
    import.meta.env.PUBLIC_KEYSTATIC_STORAGE_KIND === 'github'
      ? {
          kind: 'github',
          repo: {
            owner: import.meta.env.PUBLIC_GITHUB_REPO_OWNER!,
            name: import.meta.env.PUBLIC_GITHUB_REPO_NAME!,
          },
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Glenn Dyer' },
  },

  collections: {
    books: collection({
      label: 'Books',
      slugField: 'title',
      path: 'src/content/books/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        number: fields.integer({ label: 'Book Number', validation: { isRequired: true, min: 1 } }),
        year: fields.text({ label: 'Publication Year' }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/books',
          publicPath: '/books/',
        }),
        briefDescription: fields.text({ label: 'Brief Description (listing page)', multiline: true }),
        fullDescription: fields.text({ label: 'Full Description (detail page)', multiline: true }),
        interstitialQuote: fields.text({ label: 'Interstitial Quote', multiline: true }),
        genre: fields.text({ label: 'Genre' }),
        setting: fields.text({ label: 'Setting' }),
        buyLink: fields.url({
          label: 'Buy Link',
          description: 'Used for the "Buy Now" button on the books listing page. Leave blank to hide the button.',
        }),
        trailerUrl: fields.url({
          label: 'Trailer URL',
          description: 'Leave blank to hide the "View Trailer" button.',
        }),
        hasAudiobook: fields.checkbox({
          label: 'Audiobook Available',
          description: 'Controls whether "Audiobook" appears in the Formats row on the book detail page.',
          defaultValue: true,
        }),
        purchaseLinks: fields.object(
          {
            hardcover: fields.url({ label: 'Hardcover' }),
            paperback: fields.url({ label: 'Paperback' }),
            ebook: fields.url({ label: 'Ebook' }),
            audiobook: fields.url({ label: 'Audiobook' }),
          },
          {
            label: 'Purchase Links by Format',
            description: 'Shown on the book detail page. Formats without a link are hidden.',
          }
        ),
        testimonials: fields.array(
          fields.object({
            quote: fields.text({ label: 'Quote', multiline: true }),
            source: fields.text({ label: 'Source' }),
            outlet: fields.text({ label: 'Outlet / Role' }),
          }),
          {
            label: 'Testimonials',
            itemLabel: (props) => props.fields.source.value || 'New Testimonial',
          }
        ),
      },
    }),

    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { data: 'yaml', contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        category: fields.text({ label: 'Category', description: 'e.g. BEHIND THE BOOKS' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        image: fields.image({
          label: 'Image',
          directory: 'public/blog',
          publicPath: '/blog/',
        }),
        imageAlt: fields.text({ label: 'Image Alt Text' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/blog',
              publicPath: '/blog/',
            },
          },
        }),
      },
    }),

    carouselItems: collection({
      label: 'Hero Carousel Slides',
      slugField: 'bookTitle',
      path: 'src/content/carousel/*',
      format: { data: 'yaml' },
      schema: {
        bookTitle: fields.slug({ name: { label: 'Book Title' } }),
        seriesLabel: fields.text({
          label: 'Series Label',
          description: 'e.g. THE CONOR THORN SERIES · BOOK FOUR',
        }),
        description: fields.text({ label: 'Hero Description', multiline: true }),
        backgroundImage: fields.image({
          label: 'Background Image',
          directory: 'public/carousel',
          publicPath: '/carousel/',
        }),
        buyLink: fields.url({ label: 'Buy Link' }),
        bookId: fields.text({
          label: 'Book Slug',
          description: 'Used for /books/[id] link, e.g. trust-no-one',
        }),
        order: fields.integer({ label: 'Display Order', validation: { isRequired: true, min: 1 } }),
      },
    }),
  },
});
