import Logout from '../features/authentication/Logout'

function NavBar() {
  return (
    <nav className="flex justify-center w-full pb-10">
      <Logout />
    </nav>
  )
}

export default NavBar
