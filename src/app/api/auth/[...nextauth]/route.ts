import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const authOptions:AuthOptions={
    providers:[
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text", placeholder: "Email" },
          password: { label: "Password", type: "password", placeholder:"Password" }
        },
        async authorize(credentials, req) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

          //add db logic
    
          if (user) {
            return user
          } else {
            return null
          }
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
      async jwt({ token, user, account, profile, isNewUser }) {
        token.id=user.id

        return token
      },
      async session({ session, user, token }) {
        const updatedSession={
          ...session,
          user:{
            ...session.user,
            id:token.sub
          }
        }

        return updatedSession
      }
    },
    pages:{
      signIn:'/auth/signin'
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}