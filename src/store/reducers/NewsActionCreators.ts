import { createAsyncThunk } from '@reduxjs/toolkit'

//Types
import type { AppDispatch, RootState } from '@/store/store'
import type { INews } from '@/types/news-types'

//API
import { newsAPI } from '@/services/instanceAPI'
import { mockNews } from '@/services/mockData'

//Store
import { newsSlice } from '@/store/reducers/NewsSlice'

// RTK asyncThunk
export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await newsAPI.get<INews>('')
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

//Category News block fetching
export const fetchCategoryNewsBlock =
  (category: string = '') =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const state = getState()
      const newsBlockState = state.newsReducer.news?.data
      if (newsBlockState) {
        if (category === '') {
          dispatch(newsSlice.actions.categoryNewsBlockFetching(newsBlockState))
          return false
        }
        const res = newsBlockState.filter((news) => news.category === category)
        dispatch(newsSlice.actions.categoryNewsBlockFetching(res))
      }
    } catch (error) {
      console.log(error)
    }
  }
