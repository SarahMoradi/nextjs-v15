'use server'

import {signInSchema} from '@/app/(auth)/sign-in/_types/signin.schema'
import {redirect} from 'next/navigation'

export async function signInAction(formState: {message: string}, formData: FormData) {
  const mobile = formData.get('mobile')
  const validatedData = signInSchema.safeParse({
    mobile,
  })

  if (!validatedData.success) {
    return{
        message: 'خطا در پردازش اطلاعات'
    }
  } else {
    try {
        throw 'خطا در برقراری ارتباط با سرور'
    } catch (error) {
        return {
            message: error as string
        }
    }
  }
}
