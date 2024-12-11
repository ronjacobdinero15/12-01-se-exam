import { useQuery } from '@tanstack/react-query'
import { getJobApplications } from '../../services/apiJob'
import { useSession } from '../../hooks/useSession'

export function useGetJobApplications() {
  const { id: hr_id } = useSession()

  const {
    data: jobApplications = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['jobApplications'],
    queryFn: () => getJobApplications(hr_id),
  })

  return { jobApplications, isLoading, error }
}
