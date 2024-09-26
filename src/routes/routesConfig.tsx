import { createBrowserRouter } from 'react-router-dom'

//Components
import App from '@/App'
import ContactUs from '@/pages/ContactUs'
import Home from '@/pages/Home'
import SingleNews from '@/pages/SingleNews'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/news/:title',
        element: <SingleNews />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]
  }
])
