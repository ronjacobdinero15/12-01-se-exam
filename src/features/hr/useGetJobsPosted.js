import { useQuery } from '@tanstack/react-query'
import { useSession } from '../../hooks/useSession'
import { getJobsPosted } from '../../services/apiJob'

export function useGetJobsPosted() {
  const { id: hr_id } = useSession()

  const {
    data: jobsPosted = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['jobsPosted'],
    queryFn: () => getJobsPosted(hr_id),
  })

  return { jobsPosted, isLoading, error }
}
