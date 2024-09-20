import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

export const newsAPI = axios.create({
  baseURL: 'https://api.mediastack.com/v1/news',
  params: {
    access_key: apiKey,
    limit: 100
  }
})
