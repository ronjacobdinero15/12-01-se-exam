import { useMutation } from '@tanstack/react-query'
import { postJob as postJobApi } from '../../services/apiJob'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function usePostJob() {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  const { mutate: postJob, isLoading } = useMutation({
    mutationFn: postJobApi,
    onSuccess: data => {
      if (data.success === 200) {
        toast.success(data.message)
        navigateToHome()
      }
    },
    onError: data => {
      if (data.status === 400) {
        toast.error(data.message)
      }
    },
  })

  return { postJob, isLoading }
}
