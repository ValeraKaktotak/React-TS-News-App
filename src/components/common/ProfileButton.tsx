import { CircleUser, Loader, User } from 'lucide-react'
import React, { useState } from 'react'

//Libs
import { cn } from '@/libs/utils'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

export const ProfileButton: React.FC<Props> = ({ className }) => {
  const [isLogin, setIsLogin] = useState<
    'unauthenticated' | 'authenticated' | 'loading'
  >('unauthenticated')

  const onClickSignIn = () => {
    setIsLogin('loading')
    setTimeout(() => {
      setIsLogin(
        isLogin === 'unauthenticated' ? 'authenticated' : 'unauthenticated'
      )
    }, 2000)
    console.log(isLogin)
  }

  return (
    <div className={cn(className)}>
      {isLogin === 'unauthenticated' ? (
        <button
          onClick={onClickSignIn}
          className='flex h-10 w-[105px] items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium'
        >
          <User size={16} /> Login
        </button>
      ) : isLogin === 'authenticated' ? (
        <Link to='#'>
          <button className='flex h-10 w-[105px] items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium'>
            <CircleUser size={18} />
            Profile
          </button>
        </Link>
      ) : (
        <div className='pointer-events-none inline-flex h-10 w-[105px] items-center justify-center whitespace-nowrap rounded-md bg-gray-500 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-50'>
          <Loader className='h-5 w-5 animate-spin' />
        </div>
      )}
    </div>
  )
}
