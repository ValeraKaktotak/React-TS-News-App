import { createBrowserRouter } from 'react-router-dom'

//Components
import App from '@/App'
import Home from '@/pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])
//do home page
