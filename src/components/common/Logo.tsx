import type { FC } from 'react'
import { Link } from 'react-router-dom'

//Utils
import { cn } from '@/libs/utils'

interface ILogo {
	className?: string
	text: string
}

const Logo: FC<ILogo> = ({ className, text }) => {
	return (
		<Link
			to={'/'}
			className={cn('text-[32px] font-extrabold text-red-700', className)}
		>
			{text}
		</Link>
	)
}
export default Logo
