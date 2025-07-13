// 芋道后端API配置
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'

export interface Article {
  id: number
  title: string
  content: string
  summary: string
  coverImage: string
  publishTime: string
  category: string
  tags: string[]
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  parentId?: number
}

export interface PageData {
  title: string
  content: string
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
}

// 获取文章列表
export async function getArticles(params?: {
  page?: number
  size?: number
  category?: string
  keyword?: string
}): Promise<{
  content: Article[]
  totalElements: number
  totalPages: number
}> {
  const searchParams = new URLSearchParams()
  if (params?.page) searchParams.append('page', params.page.toString())
  if (params?.size) searchParams.append('size', params.size.toString())
  if (params?.category) searchParams.append('category', params.category)
  if (params?.keyword) searchParams.append('keyword', params.keyword)

  const response = await fetch(`${API_BASE_URL}/api/articles?${searchParams}`)
  if (!response.ok) {
    throw new Error('Failed to fetch articles')
  }
  return response.json()
}

// 获取文章详情
export async function getArticle(id: number): Promise<Article> {
  const response = await fetch(`${API_BASE_URL}/api/articles/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch article')
  }
  return response.json()
}

// 获取分类列表
export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_BASE_URL}/api/categories`)
  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }
  return response.json()
}

// 获取页面数据
export async function getPageData(slug: string): Promise<PageData> {
  const response = await fetch(`${API_BASE_URL}/api/pages/${slug}`)
  if (!response.ok) {
    throw new Error('Failed to fetch page data')
  }
  return response.json()
}

// 获取网站配置
export async function getSiteConfig(): Promise<{
  siteName: string
  siteDescription: string
  logo: string
  contact: {
    phone: string
    email: string
    address: string
  }
}> {
  const response = await fetch(`${API_BASE_URL}/api/config/site`)
  if (!response.ok) {
    throw new Error('Failed to fetch site config')
  }
  return response.json()
}