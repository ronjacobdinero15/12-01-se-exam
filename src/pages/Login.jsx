import Header from '../ui/Header'
import LoginForm from '../ui/LoginForm'

function Login() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-gray-100 h-dvh">
      <Header as="h2">Login</Header>

      <div className="w-full max-w-sm px-10 py-5 bg-white rounded-md">
        <LoginForm />
      </div>
    </main>
  )
}

export default Login
