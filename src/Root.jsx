
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'

function Root() {

  return (
    <div className='2xl:container mx-auto'>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster/>
    </div>
  )
}


export default Root
