import { Outlet } from 'react-router-dom'
import './MainLayout.css'


function MainLayout() {
  return (
    <>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default MainLayout