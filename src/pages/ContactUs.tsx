import { Instagram, Mail, Phone } from 'lucide-react'
import type { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

//Utils
import { cn } from '@/libs/utils'

//Components
import { Button } from '@/components/common/Button'

type IFormValues = {
  user_email: string
  user_name: string
  message: string
}

interface IContactUs {
  className?: string
}

const ContactUs: FC<IContactUs> = ({ className }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    reset()
    console.log(data)
  }

  return (
    <section className={cn('', className)}>
      <div className='mt-10 rounded-md border border-primary bg-tertiary p-10'>
        <h2 className='text-[32px] font-extrabold text-primary'>Contact Us</h2>
        <h4 className='font-extrabold text-primary'>SEND YOUR MESSAGE</h4>

        <div className='mt-4 flex flex-col gap-10 md:flex-row'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-1 flex-col gap-10 text-[#0c0a09]'
          >
            <div>
              <input
                className='w-full rounded-md border border-primary p-3'
                type='text'
                placeholder='Name'
                {...register('user_name', { required: true })}
                aria-invalid={errors.user_name ? 'true' : 'false'}
              />
              {errors.user_name && (
                <p role='alert' className='text-red-500'>
                  Enter your name
                </p>
              )}
            </div>
            <div>
              <input
                className='w-full rounded-md border border-primary p-3'
                type='email'
                placeholder='Email'
                {...register('user_email', { required: true })}
                aria-invalid={errors.user_email ? 'true' : 'false'}
              />
              {errors.user_email && (
                <p role='alert' className='text-red-500'>
                  Enter your email
                </p>
              )}
            </div>
            <div>
              <textarea
                placeholder='Message'
                className='h-44 w-full rounded-md border border-primary p-3'
                {...register('message', { required: true })}
                {...register('message', { required: true })}
                aria-invalid={errors.user_email ? 'true' : 'false'}
              ></textarea>
              {errors.message && (
                <p role='alert' className='text-red-500'>
                  Enter your message
                </p>
              )}
            </div>
            <Button type='submit'>Submit</Button>
          </form>

          <div className='flex flex-1 flex-col gap-5 text-primary'>
            <div className='flex items-center gap-2'>
              <Mail />
              <a href='mailto:test@gmail.com' target='_blank'>
                test@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <Phone />
              +777 777 777
            </div>
            <div className='flex items-center gap-2'>
              <Instagram />

              <a href='https://instagram.com' target='_blank'>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactUs
