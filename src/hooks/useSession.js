export function useSession() {
  const { username, id, role } =
    JSON.parse(sessionStorage.getItem('activeUser')) || {}

  return { username, id, role }
}
