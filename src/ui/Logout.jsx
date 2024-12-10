import { Button } from '@nextui-org/react'
import toast from 'react-hot-toast'
import { HiArrowRightStartOnRectangle } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  function handleLogout() {
    sessionStorage.removeItem('activeUser')
    navigate('/login', { replace: true })
    toast.success('Logout successfully')
  }
  return (
    <Button color="success" variant="light" onClick={handleLogout}>
      <HiArrowRightStartOnRectangle className="size-8" />
    </Button>
  )
}

export default Logout
