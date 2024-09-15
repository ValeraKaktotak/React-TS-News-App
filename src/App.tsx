import Header from '@/components/Header'

function App() {
	return (
		<div className='app bg-tertiary h-screen w-full p-6 transition-colors duration-500 ease-in-out'>
			<Header />
			<div className='flex flex-col items-center h-full justify-between'>
				<h1 className='text-card-foreground'>Hello World</h1>
			</div>
		</div>
	)
}

export default App
