import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './login.jsx'
import Registro from './registro.jsx'
import Home from './home.jsx'


const Router = () => {
   return (

      <BrowserRouter>
         <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/Home" element={<Home/>}/>
         </Routes>
      </BrowserRouter>

   )
}
export default Router;