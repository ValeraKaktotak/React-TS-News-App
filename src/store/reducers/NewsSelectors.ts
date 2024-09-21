import { newsCategoriesSort } from '@/libs/helpers/newsCategoriesSort'
import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

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
