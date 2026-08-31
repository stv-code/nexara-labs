export const homepageQuery = `*[_type == "homepage"][0]{
  heroHeadline,
  heroSubtext
}`

export const servicesQuery = `*[_type == "service"] | order(order asc){
  code,
  title,
  body,
  items,
  ctaHref,
  ctaLabel
}`

export const projectsQuery = `*[_type == "project"] | order(order asc){
  code,
  name,
  "type": type,
  body,
  stack,
  liveUrl
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  tagline,
  whatsAppNumber,
  email
}`
