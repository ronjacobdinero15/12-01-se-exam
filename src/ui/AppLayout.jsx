import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="container h-full p-10 mx-auto">
      <Outlet />
    </div>
  )
}

export default AppLayout
