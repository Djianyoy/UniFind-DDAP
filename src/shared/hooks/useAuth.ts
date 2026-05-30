import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isTokenValid } from '@/lib/auth/auth'

export function useAuth() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (!token || !isTokenValid(token)) {
      localStorage.removeItem('auth_token')
      router.push('/login')
    }
  }, [])
}
