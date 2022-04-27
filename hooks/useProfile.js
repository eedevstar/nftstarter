import { useSession } from 'next-auth/react'
import useSWR from 'swr'

import fetcher from 'lib/fetcher'

export default function useProfile() {
  const { data: session } = useSession()
  const loggedIn = !!session?.accessToken
  const { data: profileData, mutate } = useSWR(loggedIn ? `/user/profile` : null, fetcher)
  const profile = profileData?.data || {}
  const isAdmin = loggedIn && profile.role === 'admin'

  const update = (data) => {
    mutate({ ...profileData, data: { ...profileData.data, ...data } }, false)
  }

  return {
    loggedIn,
    profile,
    update,
    isAdmin
  }
}
