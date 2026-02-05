import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './login.jsx'
import App from './App.jsx'
// import Registro from './Registro.jsx'

const Router = () => {
   return (

      <BrowserRouter>
         <Routes>
            <Route path="/Login" element={<Login/>}/>
            {/* <Route path="/Registro" element={<Registro/>}/> */}
         </Routes>
      </BrowserRouter>

   )
}
export default Router;