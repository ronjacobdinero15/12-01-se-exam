import { Button } from '@nextui-org/react'
import { HiArrowLeft } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

function NavigateBack() {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)} className="mb-4">
      <HiArrowLeft className="size-4" />

      <span>Go back</span>
    </Button>
  )
}

export default NavigateBack
