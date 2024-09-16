import { Search } from 'lucide-react'
import { useRef, useState, type FC } from 'react'
import { Link } from 'react-router-dom'
import { useClickAway, useDebounce } from 'react-use'

//Utils
import { cn } from '@/libs/utils'

//Types
import { ISingleNews } from '@/types/news-types'

interface ISearchComponent {
  className?: string
}

export const SearchComponent: FC<ISearchComponent> = ({ className }) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchedNews, setSearchedNews] = useState<ISingleNews | null>(null)

  const ref = useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
    setSearchedNews(null)
  }

  useDebounce(
    async () => {
      try {
        console.log(searchQuery)
        //const res = await fetchSearchNews(searchQuery)
        //setProducts(res)
      } catch (error) {
        console.log(error)
      }
    },
    250,
    [searchQuery]
  )

  return (
    <>
      {focused && <div className='fixed inset-0 z-30 bg-black/50'></div>}
      <div
        ref={ref}
        className={cn(
          className,
          'relative z-30 flex h-11 flex-1 justify-between rounded-2xl'
        )}
      >
        <Search className='absolute left-3 top-1/2 h-5 translate-y-[-50%] text-gray-800' />
        <input
          className='w-full rounded-2xl bg-gray-400 pl-11 pr-5 text-black placeholder-gray-800 outline-none'
          type='text'
          placeholder='Search news...'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />

        {searchedNews && searchedNews?.data.length > 0 && (
          <div
            className={cn(
              'invisible absolute top-14 z-30 w-full rounded-xl bg-white py-2 opacity-0 shadow-md transition-all duration-200',
              focused && 'visible top-12 opacity-100'
            )}
          >
            {searchedNews.data.map((news) => (
              <Link
                key={news.title}
                to={`#`}
                className='hover:bg-primary/20 flex w-full items-center gap-3 px-3 py-2'
                onClick={onClickItem}
              >
                <img
                  className='h-8 w-8 rounded-sm'
                  src={news.image}
                  alt={news.title}
                />
                <span>{news.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
