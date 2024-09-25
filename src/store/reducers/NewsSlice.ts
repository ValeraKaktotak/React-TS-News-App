import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//Types
import type { INews, ISingleNews } from '@/types/news-types'

//ActionCreations
import { fetchNews } from '@/store/reducers/NewsActionCreators'

interface INewsState {
  news: INews | null
  newsBlock: ISingleNews[]
  isLoading: boolean
  error: string | undefined
}

const initialState: INewsState = {
  news: null,
  newsBlock: [],
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
    },
    newsBlockFetching(state, action) {
      state.newsBlock = [...state.newsBlock, ...action.payload]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<INews>) => {
        state.isLoading = false
        state.error = ''
        state.news = action.payload
      })
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
