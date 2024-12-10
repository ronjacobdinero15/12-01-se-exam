import { Button, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import EyeFilledIcon from './EyeFilledIcon'
import EyeSlashFilledIcon from './EyeSlashFilledIcon'
import Form from './Form'
import toast from 'react-hot-toast'
import { useLogin } from '../features/authentication/useLogin'
import { useSession } from '../hooks/useSession'
import { Link, useNavigate } from 'react-router-dom'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading } = useLogin()

  const [isVisible, setIsVisible] = useState(false)

  const { role } = useSession()
  const navigate = useNavigate()

  useEffect(() => {
    if (role) {
      navigate(`/${role}`, { replace: true })
    }
  }, [navigate, role])

  const toggleVisibility = () => setIsVisible(!isVisible)

  function handleLogin(e) {
    e.preventDefault()

    if (!username || !password) {
      toast.error('Fill in required input fields')
      return
    }

    login({ username, password })
  }

  return (
    <Form>
      <Input
        isRequired
        type="text"
        variant="underlined"
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        disabled={isLoading}
      />

      <Input
        isRequired
        type={isVisible ? 'text' : 'password'}
        label="Password"
        variant="underlined"
        value={password}
        onChange={e => setPassword(e.target.value)}
        disabled={isLoading}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
            ) : (
              <EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
            )}
          </button>
        }
      />

      <div className="flex items-center justify-between">
        <Button color="default" type="submit" onClick={handleLogin}>
          Login
        </Button>
        <Link to='/register'>Register</Link>
      </div>
    </Form>
  )
}

export default LoginForm
