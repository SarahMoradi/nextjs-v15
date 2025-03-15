/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { signInSchema } from "@/app/(auth)/sign-in/_types/signin.schema";
import { OperationResult } from "@/types/operation-result";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service";
import { SignIn } from "@/app/(auth)/sign-in/_types/signin.types";
import {
  sendAuthCode,
} from "@/app/(auth)/verify/_types/verify-user.type";
import { Problem } from "@/types/http-errors.interface";
import { signIn, signOut } from "@/auth";

export async function signInAction(
  formState: OperationResult<string> | null,
  formData: FormData
) {
  const mobile = formData.get("mobile") as string;
  const validatedData = signInSchema.safeParse({
    mobile,
  });

  //   if (!validatedData.success) {
  //     return {
  //       message: 'خطا در پردازش اطلاعات',
  //     }
  //   } else {
  return serverActionWrapper(
    async () =>
      await createData<SignIn, string>("/signin", {
        mobile,
      })
  );
  // try {
  //     throw 'خطا در برقراری ارتباط با سرور'
  // } catch (error) {
  //     return {
  //         message: error as string
  //     }
  // }
  //   }
}

export async function sendAuth(

  formState: OperationResult<string> | null,
  mobile: string
) {
  return serverActionWrapper(
    async () =>
      await createData<sendAuthCode, string>("/send-auth-code", {
        mobile,
      })
  );
}

export async function verify(state: Problem | undefined, formData: FormData) {
  try {
      await signIn("credentials", formData);
  } catch (error) {
      // todo
      return {
          status: 0,
          title: "",
      } satisfies Problem;
  }
}

export async function logout() {
  await signOut();
}
