export interface ISingleNews {
	pagination: Pagination
	data: ISingleNewsData[]
}
interface ISingleNewsData {
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
