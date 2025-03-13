'use client'

import {Button} from '@/app/_components/button/button'
import {useForm} from 'react-hook-form'
import {SignIn} from '../_types/signin.types'
import {TextInput} from '@/app/_components/form-input'
// import {useSignIn} from '../_api/signin'
import {useRouter} from 'next/navigation'
import {useNotificationStore} from '@/stores/notification.store'
import {useEffect} from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import { signInSchema } from '../_types/signin.schema'
import { signInAction } from '@/actions/auth'
import { useFormState } from 'react-dom'

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  })

  const router = useRouter()

  //for handing error in server actions
  const [] = useFormState(signInAction, {message: ''})

  // const signIn = useSignIn({
  //   onSuccess: () => router.push(`/verify?mobile=${getValues('mobile')}`),
  // })

  const onSubmit = (data: SignIn) => {
    
    // server action
    signInAction()

    // signIn.submit(data)  client
  }

  const showNotification = useNotificationStore((state) => state.showNotification)

  useEffect(() => {
    showNotification({
      type: 'error',
      message: 'error',
    })
  }, [])

  return (
    <>
      <h5 className='text-2xl'>ورود | ثبت نام</h5>
      <p className='mt-2'>دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form className='flex flex-col gap-6 mt-16' onSubmit={handleSubmit(onSubmit)}>
        <TextInput<SignIn>
          register={register}
          name={'mobile'}
          errors={errors}
        />

        <Button type='submit' variant='primary' isLoading={signIn.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </>
  )
}

export default SignInForm
