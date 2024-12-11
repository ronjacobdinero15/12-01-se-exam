import { useQuery } from '@tanstack/react-query'
import { getAllJobs } from '../../services/apiJob'

export function useGetAllJobs() {
  const {
    data: jobs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: getAllJobs,
  })

  return { jobs, error, isLoading }
}
