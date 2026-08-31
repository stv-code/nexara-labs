import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'Short code shown on cards (e.g. WEB, INF, SEC, GOV)',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'Short description shown on the homepage and services page',
    }),
    defineField({
      name: 'items',
      title: 'Detail items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points shown on the services detail page',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA link',
      type: 'string',
      description: 'Optional — path shown at the bottom of the services card (e.g. /government)',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA label',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls display order (ascending)',
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
