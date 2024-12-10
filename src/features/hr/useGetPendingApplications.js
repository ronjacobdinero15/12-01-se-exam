import { useQuery } from '@tanstack/react-query'
import { getPendingApplications } from '../../services/apiJob'
import { useSession } from '../../hooks/useSession'

export function useGetPendingApplications() {
  const { id: hr_id } = useSession()

  const {
    data: pendingApplications = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['pendingApplications'],
    queryFn: () => getPendingApplications(hr_id),
  })
  return { pendingApplications, isLoading, error }
}
