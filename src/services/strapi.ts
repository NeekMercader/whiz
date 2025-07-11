// Strapi Cloud integration service
import { config } from '../lib/config'

// Log configuration status
if (!config.strapi.isConfigured()) {
  console.warn('⚠️ Strapi API URL not configured properly. Using mock data.');
  console.log('Current Strapi URL:', config.strapi.apiUrl || 'Not set');
}

export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    category: string;
    readTime: string;
    cover?: {
      url: string;
      alternativeText?: string;
      width?: number;
      height?: number;
      formats?: any; // Or a more specific type for formats
    };
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      keywords?: string;
      canonicalURL?: string;
      metaImage?: {
        data?: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Mock blog posts as fallback when Strapi is not available
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    attributes: {
      title: "Why DIY App Builders Cost More Than You Think",
      slug: "diy-app-builders-hidden-costs",
      excerpt: "The real cost of DIY app builders goes far beyond the monthly subscription. Here's what they don't tell you.",
      content: "# Why DIY App Builders Cost More Than You Think\n\nDIY app builders promise quick, cheap solutions. But the reality is far different...",
      publishedAt: "2025-01-15T00:00:00.000Z",
      category: "DIY vs Professional",
      readTime: "5 min read",
      cover: {
        url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
        alternativeText: "Person working on laptop"
      },
      seo: {
        metaTitle: "Why DIY App Builders Cost More Than You Think",
        metaDescription: "The real cost of DIY app builders goes far beyond the monthly subscription. Here's what they don't tell you.",
        keywords: "DIY app builders, app development costs, business apps",
        canonicalURL: "https://whiz.so/blog/diy-app-builders-hidden-costs"
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "5 Signs Your Business Needs a Custom App",
      slug: "5-signs-business-needs-custom-app",
      excerpt: "How do you know when it's time to invest in a custom app? Here are the clear warning signs.",
      content: "# 5 Signs Your Business Needs a Custom App\n\nEvery business reaches a point where manual processes become bottlenecks...",
      publishedAt: "2025-01-10T00:00:00.000Z",
      category: "Business Apps",
      readTime: "4 min read",
      cover: {
        url: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
        alternativeText: "Business meeting"
      },
      seo: {
        metaTitle: "5 Signs Your Business Needs a Custom App",
        metaDescription: "How do you know when it's time to invest in a custom app? Here are the clear warning signs.",
        keywords: "custom app, business automation, workflow optimization",
        canonicalURL: "https://whiz.so/blog/5-signs-business-needs-custom-app"
      }
    }
  }
];

// Helper function to construct full image URLs
export const getStrapiImageUrl = (imageUrl: string): string => {
  if (!imageUrl) return '';
  
  // If it's already a full URL, return as-is
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  // If it's a relative URL, prepend the Strapi base URL
  const baseUrl = config.strapi.apiUrl?.replace('/api', '') || '';
  return `${baseUrl}${imageUrl}`;
};

// Helper function to get optimized Strapi image URL
export const getOptimizedStrapiImageUrl = (
  imageUrl: string, 
  width: number = 800, 
  height: number = 600, 
  quality: number = 80
): string => {
  const fullUrl = getStrapiImageUrl(imageUrl);
  
  // If it's an external URL, return as-is
  if (fullUrl.startsWith('http') && config.strapi.apiUrl && !fullUrl.includes(config.strapi.apiUrl.replace('/api', ''))) {
    return fullUrl;
  }
  
  // Add optimization parameters for Strapi images
  try {
    const url = new URL(fullUrl);
    url.searchParams.set('format', 'webp');
    url.searchParams.set('width', width.toString());
    url.searchParams.set('height', height.toString());
    url.searchParams.set('quality', quality.toString());
    return url.toString();
  } catch {
    return fullUrl;
  }
};

// Fetch blog posts from Strapi Cloud
export const getBlogPosts = async (page = 1, pageSize = 10): Promise<StrapiResponse<BlogPost[]>> => {
  // Check if Strapi is properly configured
  if (!config.strapi.isConfigured()) {
    console.warn('Strapi not configured, using mock data');
    return {
      data: mockBlogPosts,
      meta: {
        pagination: {
          page: 1,
          pageSize: 10,
          pageCount: 1,
          total: mockBlogPosts.length
        }
      }
    };
  }

  try {
    console.log('Fetching from Strapi:', `${config.strapi.apiUrl}/articles`);
    
    const response = await fetch(
      `${config.strapi.apiUrl}/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    console.log('Strapi response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Strapi API error:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    
    const responseText = await response.text(); // Get raw text first
    let data;
    try {
      data = JSON.parse(responseText);
      console.log('Strapi data received (parsed from text):', data);
    } catch (e) {
      console.error('Strapi JSON parsing error:', e);
      console.error('Strapi raw response text that failed parsing:', responseText);
      throw new Error(`Failed to parse JSON response from Strapi. Status: ${response.status}`);
    }
    
    // Validate response structure
    if (!data || typeof data !== 'object') {
      console.warn('Invalid Strapi response structure: data is not an object. Using mock data.');
      console.log('Strapi data that was problematic:', data);
      throw new Error('Invalid response structure from Strapi: data is not an object');
    }

    // Log the whole data object before trying to access data.data
    console.log("DEBUG strapi.ts: Full data object from getBlogPosts:", JSON.parse(JSON.stringify(data)));

    if (!data.data || !Array.isArray(data.data)) {
      console.warn('Invalid Strapi response structure: data.data is missing or not an array. Using mock data.');
      console.log('Strapi data.data that was problematic:', data.data);
      throw new Error('Invalid response structure from Strapi: data.data is missing or not an array');
    }
    console.log("DEBUG strapi.ts: getBlogPosts is returning (this goes to setPosts):", JSON.parse(JSON.stringify(data.data)));
    return data;
  } catch (error) {
    console.error('Failed to fetch or process posts from Strapi:', error);
    console.log('Falling back to mock data');
    
    // Return mock data as fallback
    return {
      data: mockBlogPosts,
      meta: {
        pagination: {
          page: 1,
          pageSize: 10,
          pageCount: 1,
          total: mockBlogPosts.length
        }
      }
    };
  }
};

// Fetch a single blog post by slug
export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  // Check if Strapi is properly configured
  if (!config.strapi.isConfigured()) {
    console.warn('Strapi not configured, checking mock data');
    const post = mockBlogPosts.find(p => p.attributes.slug === slug);
    if (!post) {
      throw new Error('Blog post not found');
    }
    return post;
  }

  try {
    console.log('Fetching single post from Strapi:', slug);
    
    const response = await fetch(
      `${config.strapi.apiUrl}/articles?filters[slug][$eq]=${slug}&populate=*`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    console.log('Strapi single post response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Strapi API error for single post:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Strapi single post data:', data);
    
    if (!data.data || data.data.length === 0) {
      throw new Error('Blog post not found in Strapi');
    }
    
    return data.data[0];
  } catch (error) {
    console.error('Failed to fetch blog post from Strapi:', error);
    
    // Try to find in mock data as fallback
    const post = mockBlogPosts.find(p => p.attributes.slug === slug);
    if (!post) {
      throw new Error('Blog post not found');
    }
    return post;
  }
};

// Fetch featured blog posts
export const getFeaturedPosts = async (limit = 3): Promise<BlogPost[]> => {
  // Check if Strapi is properly configured
  if (!config.strapi.isConfigured()) {
    console.warn('Strapi not configured, using mock data for featured posts');
    return mockBlogPosts.slice(0, limit);
  }

  try {
    console.log('Fetching featured posts from Strapi');
    
    const response = await fetch(
      `${config.strapi.apiUrl}/articles?populate=*&sort=publishedAt:desc&pagination[limit]=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    console.log('Strapi featured posts response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Strapi API error for featured posts:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Strapi featured posts data:', data);
    console.log("DEBUG strapi.ts: getFeaturedPosts is returning (this goes to setFeaturedPost):", JSON.parse(JSON.stringify(data.data || [])));
    return data.data || [];
  } catch (error) {
    console.error('Failed to fetch featured posts from Strapi:', error);
    
    // Return mock data as fallback
    return mockBlogPosts.slice(0, limit);
  }
};

// Fetch posts by category
export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  // Check if Strapi is properly configured
  if (!config.strapi.isConfigured()) {
    console.warn('Strapi not configured, using mock data for category posts');
    return mockBlogPosts.filter(post => post.attributes.category === category);
  }

  try {
    console.log('Fetching posts by category from Strapi:', category);
    
    const response = await fetch(
      `${config.strapi.apiUrl}/articles?populate=*&filters[category][$eq]=${category}&sort=publishedAt:desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    console.log('Strapi category posts response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Strapi API error for category posts:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Strapi category posts data:', data);
    
    return data.data || [];
  } catch (error) {
    console.error('Failed to fetch posts by category from Strapi:', error);
    
    // Return filtered mock data as fallback
    return mockBlogPosts.filter(post => post.attributes.category === category);
  }
};
