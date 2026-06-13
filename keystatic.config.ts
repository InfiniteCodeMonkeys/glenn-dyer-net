import { config, collection, fields } from '@keystatic/core';

export default config({
  storage:
    process.env.KEYSTATIC_STORAGE_KIND === 'github'
      ? {
          kind: 'github',
          repo: {
            owner: process.env.GITHUB_REPO_OWNER!,
            name: process.env.GITHUB_REPO_NAME!,
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
        coverImage: fields.text({
          label: 'Cover Image Path',
          description: 'Absolute path from the public directory, e.g. /trust_no_one_2d.jpg',
        }),
        briefDescription: fields.text({ label: 'Brief Description (listing page)', multiline: true }),
        fullDescription: fields.text({ label: 'Full Description (detail page)', multiline: true }),
        interstitialQuote: fields.text({ label: 'Interstitial Quote', multiline: true }),
        genre: fields.text({ label: 'Genre' }),
        setting: fields.text({ label: 'Setting' }),
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

    newsletter: collection({
      label: 'Newsletter Posts',
      slugField: 'title',
      path: 'src/content/newsletter/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        category: fields.text({ label: 'Category', description: 'e.g. BEHIND THE BOOKS' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        image: fields.text({
          label: 'Image Path',
          description: 'Absolute path from the public directory, e.g. /my-image.jpg',
        }),
        imageAlt: fields.text({ label: 'Image Alt Text' }),
        content: fields.text({ label: 'Content (Markdown)', multiline: true }),
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
        backgroundImage: fields.text({
          label: 'Background Image Path',
          description: 'Absolute path from the public directory',
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
