export interface INews {
  pagination: Pagination
  data: ISingleNews[]
}
export interface ISingleNews {
  author: string
  title: string
  description: string
  url: string
  source: string
  image: string
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
