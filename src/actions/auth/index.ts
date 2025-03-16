/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { OperationResult } from "@/types/operation-result";
import { serverActionWrapper } from "../server-action-wrapper";

import {
  sendAuthCode,
  VerifyUserModel,
} from "@/app/(auth)/verify/_types/verify-user.type";
import { AuthroizeError, signIn, signOut } from "@/auth";
import { createData } from "@/core/http-service";
import { SignIn } from "@/app/(auth)/sign-in/_types/signin.types";

export async function signInAction(
  formState: OperationResult<string> | null,
  formData: FormData
) {
  const mobile = formData.get("mobile") as string;
  // const validatedData = signInSchema.safeParse({
  //     mobile,
  // });

  // if (!validatedData.success) {
  //     return {
  //         message: "خطا در فرمت موبایل",
  //     };
  // } else {
  return serverActionWrapper(
    async () =>
      await createData<SignIn, string>("/signin", {
        mobile,
      })
  );
  // }
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

export async function verify(
  prevState: OperationResult<void> | undefined,
  model: VerifyUserModel
) {
  try {
    await signIn("credentials", {
      username: model.username,
      code: model.code,
      redirect: false,
    });
    return {
      isSuccess: true,
    } satisfies OperationResult<void>;
  } catch (error) {
    if (error instanceof AuthroizeError) {
      return {
        isSuccess: false,
        error: error.problem!,
      } satisfies OperationResult<void>;
    }
    throw new Error("");
  }
}

export async function logout() {
  await signOut();
}
