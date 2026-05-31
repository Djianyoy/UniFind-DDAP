import { User } from '@/types/auth'
import { hashPassword } from './auth'

export async function registerUser(name: string, nim: string, password: string) {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

  if (users.find((u) => u.nim === nim)) {
    throw new Error('NIM sudah terdaftar')
  }

  const newUser = {
    id: crypto.randomUUID(),
    name,
    nim,
    passwordHash: await hashPassword(password),
  }

  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
}