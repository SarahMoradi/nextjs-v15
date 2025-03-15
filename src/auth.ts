import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { VerifyUserModel } from "./app/(auth)/verify/_types/verify-user.type";
import { User, UserSession, UserToken} from "./types/user.interface";
import { API_URL } from "./configs/global";
import { createData } from "./core/http-service";
import { jwtDecode } from "jwt-decode";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  // add accessToken to User type for returning in credentials
  interface User {
    accessToken: string;
  }

  interface Session {
    user: UserSession;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserToken;
  }
}

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        code: { label: "code", type: "text" },
      },
      // if it be successful, the session will be created and we dont need any response at all!
      async authorize(credentials) {
        try {
          const user = await createData<VerifyUserModel, User>(
            `${API_URL}/verify`,
            {
              username: credentials.username as string,
              code: credentials.code as string,
            }
          );
          // Auth.js expects the user object to be returned
          return {
            accessToken: user.token,
          };
        } catch (error: unknown) {
          throw new Error("");
        }
      },
    }),
  ],
  // verify all process
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = jwtDecode<UserToken>(user.accessToken);
        token.user.accessToken = user.accessToken;
      }
      // console.log(token);
      return token;
    },
    async session({ session, token }) {
      Object.assign(session.user, token.user ?? {});
      return session;
    },
  },
});
