import { Outlet, RouterProvider } from "react-router-dom"
import router from "./routes/router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
     
    </>
  )
}

export default App
