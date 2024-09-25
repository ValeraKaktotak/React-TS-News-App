import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

//Store
import { fetchMockNews } from './store/reducers/NewsActionCreators'
import { useAppDispatch } from './store/store'

//Layout
import { Layout } from '@/layout/Layout'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    //only 500 real requests
    //dispatch(fetchNews())

    //mock data
    dispatch(fetchMockNews())
  }, [dispatch])
  return (
    <div className='bg-tertiary transition-colors duration-500 ease-in-out'>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
