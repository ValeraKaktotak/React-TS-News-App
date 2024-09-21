import { createAsyncThunk } from '@reduxjs/toolkit'

//Types
import type { AppDispatch } from '@/store/store'
import type { INews } from '@/types/news-types'

//API
import { newsAPI } from '@/services/instanceAPI'
import { mockNews } from '@/services/mockData'

//Store
import { newsSlice } from '@/store/reducers/NewsSlice'

//Helpers
import { newsCategoriesSort } from '@/libs/helpers/newsCategoriesSort'

// RTK asyncThunk
export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await newsAPI.get<INews>('')
      const cats = newsCategoriesSort(response.data.data)
      thunkAPI.dispatch(newsSlice.actions.categoriesFetch(cats))
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue('News fetching error')
    }
  }
)

//Mock data thunk
export const fetchMockNews = () => (dispatch: AppDispatch) => {
  try {
    dispatch(newsSlice.actions.newsMockFetching())
    setTimeout(() => {
      const response = mockNews
      const cats = newsCategoriesSort(response.data)
      dispatch(newsSlice.actions.categoriesFetch(cats))
      dispatch(newsSlice.actions.newsMockFetchingSuccess(response))
    }, 1500)
  } catch (error) {
    console.log(error)
    dispatch(
      newsSlice.actions.newsMockFetchingError(
        'Some error with mock news downloading'
      )
    )
  }
}
