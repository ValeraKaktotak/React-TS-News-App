import { createSelector } from '@reduxjs/toolkit'

//Store
import { RootState } from '../store'

//Helpers
import { getRandomForSliderNews } from '@/libs/helpers/getRandomForSliderNews'
import { newsCategoriesSort } from '@/libs/helpers/newsCategoriesSort'

const getNewsSelector = (state: RootState) => {
  return state.newsReducer.news
}

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
