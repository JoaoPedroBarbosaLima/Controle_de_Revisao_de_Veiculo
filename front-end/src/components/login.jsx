import './css/LoginRegistro.css'
import { useEffect } from "react";
import Passwordinput from './passwordinput.jsx'
import { useNavigate } from "react-router";

  
const Login = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);


    try {
      const response = await fetch("http://localhost:5000/api/usuario/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          senha: formData.get("password"),
        })
      })
      .then( res => {
        if(!res.ok){
          return res.json().then(data => {
            throw new Error(data.erro)
          })
        }
        return res.json()
      })
      .then( data => {
        console.log("data: ")
        console.log(data)
        alert(data.message)
        // navigate("/Home")
      })
      .catch(error => {
        console.error("Erro: ", error);
      })
      
      
    } catch (erro) {
      console.error("Erro:", erro);
    }
  };

    useEffect(() => {
    }, []);

    return (

        <>
          <script src="https://kit.fontawesome.com/yourcode.js" crossOrigin="anonymous"></script>
        
        <section>
          <div className="box">


            <form action="" onSubmit={handleSubmit}>
              <h2>login</h2>

                  
              <div className="box-input">
                <input type="email" required placeholder="" name="email"/>
                <label htmlFor="login__input" className="login__label">E-mail</label>
              </div>

              <Passwordinput/>


              <div className="forgot">
                  <label htmlFor="login__check-input">
                    <input type="checkbox"/>Remember me
                  </label>
                  <a href="#">Forgot Password?</a>
              </div>

              <button type="submit">Login</button>
              <div className="register-link">
                <p>
                  Não tem conta? <a href="http://localhost:5173/Registro">Registre-se</a>
                </p>
              </div>
            </form>
          
          </div>

        </section>

        
        <script src="./Password.js"></script>

    </>

    )


}

export default Login