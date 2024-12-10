export function useSession() {
  const { username, id, role, fullName, yearsOfExp } =
    JSON.parse(sessionStorage.getItem('activeUser')) || {}

  return { username, id, role, fullName, yearsOfExp }
}
