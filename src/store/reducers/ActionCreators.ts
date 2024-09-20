import { createAsyncThunk } from '@reduxjs/toolkit'

//Types
import type { AppDispatch } from '@/store/store'
import type { ISingleNews } from '@/types/news-types'

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
      const response = await newsAPI.get<ISingleNews>('')
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue('News fetching error')
    }
  }
)

//Mock data thunk
export const fetchMockNews = () => {
  return (dispatch: AppDispatch) => {
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
          'Some error with news downloading'
        )
      )
    }
  }
}
