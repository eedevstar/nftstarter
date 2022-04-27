import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import fetcher from 'lib/fetcher'

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    authorize: async ({ email, password }) => {
      try {
        const data = await fetcher('/user/login', 'POST', {
          email,
          password
        });

        if (data.success) {
          return data;
        } else {
          throw new Error(data.message)
        }
      } catch (e) {
        throw new Error(e.message)
      }
    },
  })
]

const callbacks = {
  async jwt({ token, user, account, isNewUser }) {
    if (user?.token) {
      token = { accessToken: user.token }
    }

    return token
  },
  async session({ session, token, user }) {
    session.accessToken = token.accessToken;
    return session;
  }
}

const options = {
  providers,
  callbacks,
  pages: {
    signIn: '/login'
  },
  jwt: {
    maxAge: 60 * 60 * 24
  },
  session: {
    maxAge: 60 * 60 * 24
  }
}

export default NextAuth(options)
