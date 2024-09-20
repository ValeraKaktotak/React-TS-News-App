import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//Types
import { ISingleNews } from '@/types/news-types'
import { fetchNews } from './ActionCreators'

interface INewsState {
  news: ISingleNews | null
  isLoading: boolean
  error: string | undefined
}

const initialState: INewsState = {
  news: null,
  isLoading: false,
  error: ''
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsMockFetching(state) {
      state.isLoading = true
    },
    newsMockFetchingSuccess(state, action) {
      state.news = action.payload
      state.isLoading = false
    },
    newsMockFetchingError(state, action) {
      state.error = action.payload
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<ISingleNews>) => {
          state.isLoading = false
          state.error = ''
          state.news = action.payload
        }
      )
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export default newsSlice.reducer
