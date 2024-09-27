import { createSelector } from '@reduxjs/toolkit'

//Store
import { RootState } from '../store'

//Helpers
import { getRandomForSliderNews } from '@/libs/helpers/getRandomForSliderNews'
import { newsCategoriesSort } from '@/libs/helpers/newsCategoriesSort'

export const getNewsSelector = (state: RootState) => {
  return state.newsReducer.news
}

export const getNewsBlockSelector = (state: RootState) => {
  return state.newsReducer.newsBlock
}

export const isLoadedSelector = (state: RootState) => {
  return state.newsReducer.isLoading
}

export const getPaginationBlockNews = (page: number) =>
  createSelector(getNewsBlockSelector, (items) => {
    if (items) {
      const res = items.slice(0, page * 10 + 10)
      return res
    }
    return []
  })

export const getNewsBlockCountSelector = createSelector(
  getNewsBlockSelector,
  (items) => {
    if (items) {
      return items.length
    }
    return 0
  }
)

export const getSearchNews = (query: string) =>
  createSelector(getNewsSelector, (items) => {
    if (query === '') {
      return []
    }
    if (items) {
      const res = items.data.filter((item) => item.title.includes(query))
      return res
    }
    return []
  })

export const getCategories = createSelector(getNewsSelector, (items) => {
  if (items) {
    const cats = newsCategoriesSort(items.data)
    return cats
  }
  return items
})

export const getSliderNews = createSelector(getNewsSelector, (items) => {
  if (items) {
    const res = getRandomForSliderNews(items, 6)
    return res
  }
  return items
})

export const getSidebarNews = createSelector(getNewsSelector, (items) => {
  if (items) {
    const res = items.data.slice(25, 30)
    return res
  }
  return items
})
