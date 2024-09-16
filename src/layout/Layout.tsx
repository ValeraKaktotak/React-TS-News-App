import { type FC } from 'react'

//Components
import { Header } from '@/components/Header'

type ILayout = {
	children: React.ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className='app bg-mainBackground h-screen w-[1200px] m-auto p-6 transition-colors duration-500 ease-in-out text-foreground'>
			<Header />
			{children}
		</div>
	)
}
