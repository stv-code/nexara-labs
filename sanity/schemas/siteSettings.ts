import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Company tagline',
      type: 'string',
      description: 'Short tagline shown in the footer',
    }),
    defineField({
      name: 'whatsAppNumber',
      title: 'WhatsApp number',
      type: 'string',
      description: 'Include country code, no spaces or + symbol (e.g. 254700000000)',
    }),
    defineField({
      name: 'email',
      title: 'Contact email',
      type: 'string',
    }),
  ],
})
