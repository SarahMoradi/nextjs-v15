'use server'

import {signInSchema} from '@/app/(auth)/sign-in/_types/signin.schema'
import {redirect} from 'next/navigation'

export async function signInAction(formState: {message: string}, formData: FormData) {
  const mobile = formData.get('mobile')
  const validatedData = signInSchema.safeParse({
    mobile,
  })

  if (!validatedData.success) {
    console.log('error')
  } else {
    console.log(mobile, 'server action')
    redirect('/')
  }
}
