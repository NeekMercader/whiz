import Fuse from 'fuse.js'
import { BlogPost } from '../services/strapi'

// Search configuration
const searchOptions = {
  keys: [
    { name: 'attributes.title', weight: 0.4 },
    { name: 'attributes.excerpt', weight: 0.3 },
    { name: 'attributes.content', weight: 0.2 },
    { name: 'attributes.category', weight: 0.1 }
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true
}

export interface SearchResult<T> {
  item: T
  score?: number
  matches?: any[]
}

// Blog search
export class BlogSearch {
  private fuse: Fuse<BlogPost>

  constructor(posts: BlogPost[]) {
    this.fuse = new Fuse(posts, searchOptions)
  }

  search(query: string): SearchResult<BlogPost>[] {
    if (!query.trim()) return []
    
    const results = this.fuse.search(query)
    return results.map(result => ({
      item: result.item,
      score: result.score,
      matches: result.matches
    }))
  }

  updateIndex(posts: BlogPost[]) {
    this.fuse.setCollection(posts)
  }
}

// Portfolio search
export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  client: string
}

export class PortfolioSearch {
  private fuse: Fuse<PortfolioItem>

  constructor(items: PortfolioItem[]) {
    const portfolioOptions = {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'category', weight: 0.2 },
        { name: 'technologies', weight: 0.1 }
      ],
      threshold: 0.3,
      includeScore: true
    }
    
    this.fuse = new Fuse(items, portfolioOptions)
  }

  search(query: string): SearchResult<PortfolioItem>[] {
    if (!query.trim()) return []
    
    const results = this.fuse.search(query)
    return results.map(result => ({
      item: result.item,
      score: result.score
    }))
  }
}

// Global search function
export const performGlobalSearch = async (query: string) => {
  const results = {
    blog: [] as SearchResult<BlogPost>[],
    portfolio: [] as SearchResult<PortfolioItem>[],
    pages: [] as { title: string; url: string; description: string }[]
  }

  // Search blog posts
  try {
    const { getBlogPosts } = await import('../services/strapi')
    const blogResponse = await getBlogPosts(1, 100)
    const blogSearch = new BlogSearch(blogResponse.data)
    results.blog = blogSearch.search(query)
  } catch (error) {
    console.warn('Failed to search blog posts:', error)
  }

  // Search static pages
  const pages = [
    { title: 'Services', url: '/#services', description: 'Custom app development services' },
    { title: 'Process', url: '/#process', description: 'How we build your app' },
    { title: 'Portfolio', url: '/portfolio', description: 'Real apps, real results' },
    { title: 'ROI Calculator', url: '/roi-calculator', description: 'Calculate your return on investment' },
    { title: 'Contact', url: '/contact', description: 'Get in touch with us' },
    { title: 'Workflow Killer', url: '/workflow-killer', description: 'Kill your worst workflow in 72 hours' },
    { title: 'Free App Friday', url: '/free-app-friday', description: 'Win a free app every Friday' }
  ]

  const pageSearch = new Fuse(pages, {
    keys: ['title', 'description'],
    threshold: 0.4
  })

  results.pages = pageSearch.search(query).map(result => result.item)

  return results
}