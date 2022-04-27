import { getSession } from 'next-auth/react'

export async function checkAuth(context) {
  const session = await getSession(context)

  if (!session?.accessToken) {
    return {
      redirect: {
        destination: `/login?next=${context.resolvedUrl}`,
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export async function authRedirect(context) {
  const session = await getSession(context)

  if (session?.accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
