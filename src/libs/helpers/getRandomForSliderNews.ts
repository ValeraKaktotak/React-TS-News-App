//Types
import type { INews, ISingleNews } from '@/types/news-types'

export const getRandomForSliderNews = (
  arr: INews,
  numElements: number = 6
): ISingleNews[] => {
  const arrayCopy = [...arr.data]
  const uniqueRandomElements = new Set()

  while (uniqueRandomElements.size < numElements) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length)
    const [selectedElement] = arrayCopy.splice(randomIndex, 1)
    uniqueRandomElements.add(selectedElement)
  }

  return Array.from(uniqueRandomElements) as ISingleNews[]
}
