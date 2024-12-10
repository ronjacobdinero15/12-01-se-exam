import { apiUrl } from '../utils/links'

export async function login(username, password) {
  const res = await fetch(`${apiUrl}?action=login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  if (!res.ok) throw new Error('Error logging in')

  const data = await res.json()

  return data
}
