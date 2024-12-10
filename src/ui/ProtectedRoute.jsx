import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const { role } = useSession()

  useEffect(() => {
    if (!role) {
      navigate('/login', { replace: true })
    }
  }, [navigate, role])

  return role ? children : null
}

export default ProtectedRoute
