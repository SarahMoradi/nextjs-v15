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
import { Alert } from '@/app/_components/alert/alert'

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  })

  const showNotification = useNotificationStore((state) => state.showNotification)

  //for handing error in server actions
  const [formState, action] = useFormState(signInAction, {message: ''})

  useEffect(() => {
    if(formState.message){
      showNotification({
        message: formState.message,
        type: 'error'
      })
    }
  }, [formState, showNotification])

 
  const onSubmit = (data: SignIn) => {
    
    // server action
    const formData = new FormData();
    formData.append('mobile', data.mobile)
    action(formData)

    // signIn.submit(data)  client
  }

  
  useEffect(() => {
    showNotification({
      type: 'error',
      message: 'error',
    })
  }, [])

   // const signIn = useSignIn({
  //   onSuccess: () => router.push(`/verify?mobile=${getValues('mobile')}`),
  // })


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

        <Button type='submit' variant='primary'>
          تایید و دریافت کد
        </Button>
        {
          formState.message && <Alert variant='error'>{formState.message}</Alert>
        }
      </form>
    </>
  )
}

export default SignInForm
