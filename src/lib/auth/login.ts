    import { User } from '@/types/auth'
    import { hashPassword, createToken } from './auth'

    export async function loginUser(nim: string, password: string) {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
    const hash = await hashPassword(password)
    const user = users.find((u) => u.nim === nim && u.passwordHash === hash)

    if (!user) throw new Error('NIM atau password salah')

    const token = createToken(user.id, user.nim)
    localStorage.setItem('auth_token', token)
    return user
    }