import { Outlet } from 'react-router-dom'

//Layout
import { Layout } from '@/layout/Layout'

const App: React.FC = () => {
	return (
		<div className='bg-tertiary transition-colors duration-500 ease-in-out'>
			<Layout>
				<Outlet />
			</Layout>
		</div>
	)
}

export default App
