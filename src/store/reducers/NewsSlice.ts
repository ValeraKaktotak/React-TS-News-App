import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//Types
import type { INews, ISingleNews } from '@/types/news-types'

//ActionCreations
import { fetchNews } from '@/store/reducers/NewsActionCreators'

interface INewsState {
  news: INews | null
  singleNews: ISingleNews | null
  hotNews: ISingleNews[] | []
  sliderNews: ISingleNews[] | []
  categories: {
    general: ISingleNews[]
    business: ISingleNews[]
    entertainment: ISingleNews[]
    health: ISingleNews[]
    science: ISingleNews[]
    sports: ISingleNews[]
    technology: ISingleNews[]
  }
  isLoading: boolean
  error: string | undefined
}

const initialState: INewsState = {
  news: null,
  singleNews: null,
  hotNews: [],
  sliderNews: [],
  categories: {
    general: [],
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: []
  },
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
    categoriesFetch(state, action) {
      state.categories = action.payload
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
