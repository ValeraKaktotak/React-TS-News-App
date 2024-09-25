import type { FC } from 'react'
import { Link, useParams } from 'react-router-dom'

//Utils
import { cn } from '@/libs/utils'

//Store
import { getNewsSelector } from '@/store/reducers/NewsSelectors'
import { useAppSelector } from '@/store/store'

//Images
import noImage from '@/assets/images/no-image.png'

//Components
import { Button } from '@/components/common/Button'
import { Skeleton } from '@/components/common/Skeleton'

interface ISingleNews {
  className?: string
}

const SingleNews: FC<ISingleNews> = ({ className }) => {
  const data = useAppSelector(getNewsSelector)
  const { title } = useParams()

  const news = data?.data.find((news) => news.title === title)
  const image = news?.image || noImage

  if (data && news) {
    return (
      <section
        className={cn(
          'mt-10 rounded-md border border-primary bg-tertiary p-10',
          className
        )}
      >
        {data && title ? (
          <div className='grid grid-cols-2'>
            <div className='p-2'>
              <img
                src={image}
                alt={title}
                className='h-full w-auto rounded-lg'
              />
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <h2 className='text-2xl font-bold'>{title}</h2>
              <p>{news?.description}</p>
              <div>{news?.published_at}</div>
              <div>{news?.source}</div>
              {news?.url ? (
                <Link to={news?.url} target='_blank'>
                  <Button>Go to source</Button>
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          <Skeleton spinnerSize='[50px]' />
        )}
      </section>
    )
  }

  return <div>Page not found</div>
}
export default SingleNews
