import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { applyJob as applyJobApi } from '../../services/apiJob'

export function useApplyJob() {
  const { mutate: applyJob, isLoading: isApplying } = useMutation({
    mutationFn: applyJobApi,
    onSuccess: data => {
      if (data.success === 200) {
        toast.success(data.message)
      }
    },
    onError: data => {
      if (data.status === 400) {
        toast.error(data.message)
      }
    },
  })

  return { applyJob, isApplying }
}
