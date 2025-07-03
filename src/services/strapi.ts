// Mock Strapi service for deployment
// This provides fallback data when Strapi is not available

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
    featuredImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    seo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string;
      canonicalURL: string;
      metaImage: {
        data: {
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

// Mock blog posts for when Strapi is not available
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
        canonicalURL: "https://whiz.so/blog/diy-app-builders-hidden-costs",
        metaImage: {
          data: {
            attributes: {
              url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            }
          }
        }
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
        canonicalURL: "https://whiz.so/blog/5-signs-business-needs-custom-app",
        metaImage: {
          data: {
            attributes: {
              url: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            }
          }
        }
      }
    }
  }
];

// Blog API functions
export const getBlogPosts = async (page = 1, pageSize = 10): Promise<StrapiResponse<BlogPost[]>> => {
  // Return mock data for deployment
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
};

export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  const post = mockBlogPosts.find(p => p.attributes.slug === slug);
  if (!post) {
    throw new Error('Blog post not found');
  }
  return post;
};

export const getFeaturedPosts = async (limit = 3): Promise<BlogPost[]> => {
  return mockBlogPosts.slice(0, limit);
};

export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  return mockBlogPosts.filter(post => post.attributes.category === category);
};

// Helper function to get full image URL
export const getStrapiImageUrl = (imageUrl: string): string => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  return imageUrl; // Return as-is for external URLs
};