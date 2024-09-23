import { ISingleNews } from '@/types/news-types'

interface newsCategoriesSortProps {
  general: ISingleNews[]
  business: ISingleNews[]
  entertainment: ISingleNews[]
  health: ISingleNews[]
  science: ISingleNews[]
  sports: ISingleNews[]
  technology: ISingleNews[]
}

type NewsCategory =
  | 'general'
  | 'business'
  | 'entertainment'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology'

export const newsCategoriesSort = (
  newsArray: ISingleNews[]
): newsCategoriesSortProps => {
  const categorizedNews: newsCategoriesSortProps = {
    general: [],
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: []
  }

  newsArray.forEach((news) => {
    const category = news.category as NewsCategory
    categorizedNews[category].push(news)
  })

  return categorizedNews
}
