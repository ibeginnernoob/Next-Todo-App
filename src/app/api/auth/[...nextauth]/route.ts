import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/prisma/index";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions:AuthOptions={
  adapter:PrismaAdapter(prisma),
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder:"Password" }
      },
      async authorize(credentials, req) {
        if (!credentials){
          return null; 
        }
      
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
      
        if (user && user.password === credentials.password) {
          return user; // Return user if authenticated
        }
      
        return null; // Return null if authentication fails
      }      
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  secret:process.env.NEXTAUTH_SECRET,
  callbacks:{
    async jwt({ token, user, account, profile }) {
      if(user){
        token.id=user.id
      }
      console.log(token, user, account, profile)
      return token
    },
    async session({ session, user, token }) {
      console.log(session,user,token)

      return session
    }
  },
  pages:{
    signIn:'/auth/signin'
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}