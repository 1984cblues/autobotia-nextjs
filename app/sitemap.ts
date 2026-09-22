import { MetadataRoute } from 'next'
import { topCities } from '@/lib/data/cities'
import { docs, meta } from '@/sourcecontent/server'
import { loader } from 'fumadocs-core/source'
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server'

const blogSource = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(docs as any, meta as any),
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.autobotia.com.br'

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/estudos-de-caso`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/simulador`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Service pages
  const services = [
    'web-design',
    'seo-local',
    'seo',
    'geo',
    'aeo',
  ]
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.95,
  }))

  // Programmatic SEO City pages
  const cityPages: MetadataRoute.Sitemap = topCities.map((city) => ({
    url: `${baseUrl}/c/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  // Blog posts
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = blogSource.getPages()
    blogPages = posts.map((post) => ({
      url: `${baseUrl}${post.url}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    }))
  } catch (e) {
    console.error('Error generating blog sitemap:', e)
  }

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages]
}
