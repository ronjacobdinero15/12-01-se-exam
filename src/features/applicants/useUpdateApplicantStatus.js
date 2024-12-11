import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateApplicantStatus as updateApplicantStatusApi } from '../../services/apiJob'

export function useUpdateApplicantStatus() {
  const queryClient = useQueryClient()

  const { mutate: updateApplicantStatus, isLoading: isUpdating } = useMutation({
    mutationFn: updateApplicantStatusApi,
    onSuccess: data => {
      if (data.success === 200) {
        toast.success(data.message)
        queryClient.invalidateQueries(['jobApplications'])
      }
    },
    onError: data => {
      if (data.status === 400) {
        toast.error(data.message)
      }
    },
  })

  return { updateApplicantStatus, isUpdating }
}
