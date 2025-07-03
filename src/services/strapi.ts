import axios from 'axios';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const strapiApi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

// Blog API functions
export const getBlogPosts = async (page = 1, pageSize = 10): Promise<StrapiResponse<BlogPost[]>> => {
  try {
    const response = await strapiApi.get('/blog-posts', {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        'populate': ['featuredImage', 'seo', 'seo.metaImage'],
        'sort': 'publishedAt:desc',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  try {
    const response = await strapiApi.get('/blog-posts', {
      params: {
        'filters[slug][$eq]': slug,
        'populate': ['featuredImage', 'seo', 'seo.metaImage'],
      },
    });
    
    if (response.data.data.length === 0) {
      throw new Error('Blog post not found');
    }
    
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

export const getFeaturedPosts = async (limit = 3): Promise<BlogPost[]> => {
  try {
    const response = await strapiApi.get('/blog-posts', {
      params: {
        'pagination[pageSize]': limit,
        'populate': ['featuredImage', 'seo'],
        'sort': 'publishedAt:desc',
        'filters[featured][$eq]': true,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    throw error;
  }
};

export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const response = await strapiApi.get('/blog-posts', {
      params: {
        'filters[category][$eq]': category,
        'populate': ['featuredImage', 'seo'],
        'sort': 'publishedAt:desc',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    throw error;
  }
};

// Helper function to get full image URL
export const getStrapiImageUrl = (imageUrl: string): string => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  return `${STRAPI_URL}${imageUrl}`;
};