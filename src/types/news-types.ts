export interface INews {
  pagination: Pagination
  data: ISingleNews[]
}
export interface ISingleNews {
  author: string | null
  title: string
  description: string
  url: string
  source: string
  image: string | null
  category: string
  language: string
  country: string
  published_at: string
}
interface Pagination {
  limit: number
  offset: number
  count: number
  total: number
}
