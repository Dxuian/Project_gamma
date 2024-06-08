import 'server-only';
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "@/bcrypt"
import { getUserFromDb } from "@/postgres"


import { object, string } from "zod"
 
export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
})


export const { handlers, signIn, signOut, auth } =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
        const { email, password } = await signInSchema.parseAsync(credentials)
        // logic to salt and hash password
       try{ 
        // const pwHash : string = await  saltAndHashPassword(credentials.password as string)
 
        // logic to verify if user exists
        user = await getUserFromDb(credentials.email as string, credentials.password as string)
        if (!user) {
          throw new Error("User not found.")
        }}
        catch (error) {  
          throw new Error((error as Error).message)
        }
         return user
      },
    }),
  ],
  callbacks: {
    jwt({ token, user,account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
    session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as string;
      }
      if (token.provider) {
        // @ts-ignore
        session.user.provider = token.provider;
      }

      return session;
    },
  }
})




 



