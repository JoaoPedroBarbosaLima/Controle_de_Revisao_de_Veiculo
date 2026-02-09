import './css/LoginRegistro.css'
import { useEffect } from "react";
import Passwordinput from './passwordinput.jsx'
import { useNavigate } from "react-router";

const Registro = () => {
    
  const navigate = useNavigate()

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("http://localhost:5000/api/Usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.get("nome"),
          senha: formData.get("password"),
          email: formData.get("email"),
          ativo: true,
          cpf: formData.get("cpf"),
          telefone: formData.get("telefone")
        })
      });

      if (!response.ok) throw new Error("Erro na requisição");
      alert("Usuario criado com sucesso")
      console.log("Sucesso", await response.json());
      navigate("/App")
    } catch (error) {
      console.error("Erro:", error);
    }
  };


    useEffect(() => {
    }, []);

    return (

    <>
    <section>
        <div className="box registro">

            <form id="form" onSubmit={handleSubmit}>
                <h2>Registro</h2>

                <div>
           
                    <div className="box-input">
                        <input type="string" required className="login__input" name="nome" id="nome" placeholder=""/>
                        <label htmlFor="login__input" className="login__label">Nome</label>
                    </div>


          
                    <div className="box-input" id="email-input">
                        <input type="email" required className="login__input" name="email" id="email" placeholder=""/>
                        <label htmlFor="login__input" className="login__label">E-mail</label>
                    </div>

            
                    <div className="box-input">
                        <input type="number" required className="login__input" name="telefone" id="telefone" placeholder=""/>
                        <label htmlFor="login__input" className="login__label">Telefone</label>
                    </div>
        
                    <div className="box-input">
                        <input type="number" required className="login__input" name="cpf" id="cpf" placeholder=""/>
                        <label htmlFor="login__input" className="login__label">CPF</label>
                    </div>

                    <Passwordinput/>

                </div>

                <button type="submit">Registrar-se</button>

                <div className="register-link">
                <p>
                  Já possui uma conta? <a href="http://localhost:5173/Login">Login</a>
                </p>
              </div>
          </form>
          
        </div>
    </section>

    </>

    )


}

export default Registro