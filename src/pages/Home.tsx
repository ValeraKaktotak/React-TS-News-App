import type { FC } from 'react'

//Components
import { CategoriesBlock } from '@/components/common/CategoriesBlock'
import { NewsBlock } from '@/components/common/NewsBlock'
import { Slider } from '@/components/common/Slider'

const Home: FC = () => {
  return (
    <>
      <CategoriesBlock />
      <Slider />
      <NewsBlock />
    </>
  )
}

export default Home
