import { useEffect, type FC } from 'react'

//Store
import { fetchMockNews } from '@/store/reducers/NewsActionCreators'
import { useAppDispatch } from '@/store/store'

//Components
import { CategoriesBlock } from '@/components/common/CategoriesBlock'
import { NewsBlock } from '@/components/common/NewsBlock'
import { Slider } from '@/components/common/Slider'

const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    //only 500 real requests
    //dispatch(fetchNews())

    //mock data
    dispatch(fetchMockNews())
  }, [dispatch])
  return (
    <>
      <CategoriesBlock />
      <Slider />
      <NewsBlock />
    </>
  )
}

export default Home
