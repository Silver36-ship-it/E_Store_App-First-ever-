import { RouterProvider } from "react-router-dom"
import router from "./routes/Router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <RouterProvider router ={router}/>
      
     
    </>
  )
}

export default App
