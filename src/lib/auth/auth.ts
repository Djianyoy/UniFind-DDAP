// Buat token
export function createToken(userId: string, nim: string) {
  const payload = {
    userId,
    nim,
    exp: Date.now() + 1000 * 60 * 60 * 24, 
  }
  return btoa(JSON.stringify(payload)) 
}

// Baca token
export function parseToken(token: string) {
  try {
    return JSON.parse(atob(token))
  } catch {
    return null
  }
}

// Cek apakah token masih valid
export function isTokenValid(token: string): boolean {
  const payload = parseToken(token)
  if (!payload) return false
  return payload.exp > Date.now()
}

// Hash password sederhana (pakai Web Crypto untuk lebih aman)
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}