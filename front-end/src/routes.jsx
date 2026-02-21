import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/login.jsx'
import Registro from './pages/registro.jsx'
import Dashboard from './pages/dashboard.jsx'
import Dados from "./pages/dados.jsx"
import Veiculo from "./pages/veiculo.jsx"
import Funcionario from "./pages/funcionario.jsx"

const Router = () => {
   return (

      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/veiculos" element={<Veiculo/>}/>
            <Route path="/dados" element={<Dados/>}/>
            <Route path="/funcionario" element={<Funcionario/>}/>
         </Routes>
      </BrowserRouter>

   )
}
export default Router;