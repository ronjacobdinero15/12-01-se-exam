import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'
import { login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const navigate = useNavigate()

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi(username, password),
    onSettled: activeUser => {
      const { status, id, username, fullName, yearsOfExp, role, message } =
        activeUser
      if (status === 200) {
        toast.success(message)
        sessionStorage.setItem(
          'activeUser',
          JSON.stringify({
            id,
            username,
            fullName,
            yearsOfExp,
            role,
          })
        )
        navigate(`/${role}`, { replace: true })
      } else {
        toast.error(message)
      }
    },
  })

  return { login, isLoading }
}
