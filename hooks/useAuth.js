import { useSession } from 'next-auth/react'

const useAuth = () => {
  const { data: session } = useSession()

  if (session) {
    return session.accessToken
  } else {
    return null;
  }
}

export default useAuth
