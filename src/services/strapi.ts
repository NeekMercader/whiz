// Strapi Cloud integration service
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'https://your-strapi-instance.strapi.app/api';

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
    featuredImage?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
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
      featuredImage: {
        data: {
          attributes: {
            url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
            alternativeText: "Person working on laptop"
          }
        }
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
      featuredImage: {
        data: {
          attributes: {
            url: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
            alternativeText: "Business meeting"
          }
        }
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
  const baseUrl = STRAPI_API_URL.replace('/api', '');
  return `${baseUrl}${imageUrl}`;
};

// Fetch blog posts from Strapi Cloud
export const getBlogPosts = async (page = 1, pageSize = 10): Promise<StrapiResponse<BlogPost[]>> => {
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/blog-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Failed to fetch from Strapi, using mock data:', error);
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
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/blog-posts?filters[slug][$eq]=${slug}&populate=*`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      throw new Error('Blog post not found');
    }
    
    return data.data[0];
  } catch (error) {
    console.warn('Failed to fetch blog post from Strapi, checking mock data:', error);
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
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/blog-posts?populate=*&filters[featured][$eq]=true&pagination[limit]=${limit}&sort=publishedAt:desc`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.warn('Failed to fetch featured posts from Strapi, using mock data:', error);
    // Return mock data as fallback
    return mockBlogPosts.slice(0, limit);
  }
};

// Fetch posts by category
export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/blog-posts?populate=*&filters[category][$eq]=${category}&sort=publishedAt:desc`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.warn('Failed to fetch posts by category from Strapi, using mock data:', error);
    // Return filtered mock data as fallback
    return mockBlogPosts.filter(post => post.attributes.category === category);
  }
};