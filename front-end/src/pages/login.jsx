import styles from '../css/Auth.module.css'
import { useEffect } from "react";
import Passwordinput from '../components/passwordinput.jsx'
import { useNavigate } from "react-router";
import { ValidarLogin } from '../services/auth.jsx';
import api from '../services/api.jsx';
  
const Login = () => {

  const navigate = useNavigate()

  useEffect(() => {

        async function validarLogin() {

            try {
              const res = await ValidarLogin()


              if(res.statusText == "OK") {
                  navigate("/dashboard")
              }

            } catch(erro) {
                console.error(erro)
            }
            } 

        validarLogin()

    }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await api.post("http://localhost:5000/api/usuario/login",
        {
          email: formData.get("email"),
          senha: formData.get("password"),
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      
      if(res.statusText != 'OK') throw new Error('Erro ao fazer login')
      alert(res.data.message)
      navigate("/dashboard")

    } catch (erro) {
      alert('credenciais incorretas')
      console.error("Erro:", erro);
    }
  };

    useEffect(() => {
    }, []);

    return (

        <>
          <script src="https://kit.fontawesome.com/yourcode.js" crossOrigin="anonymous"></script>
        
        <section className={styles.section}>
          <div className={styles.box}>

            <form onSubmit={handleSubmit}>
              <h2 className={styles.h2}>Torettos</h2>

              <div className={`${styles.box_input} ${styles.email_input}`} id="email-input">
                <input type="email" required className={styles.login__input} name="email" id="email" placeholder=""/>
                <label htmlFor="login__input" className={styles.login__label}>E-mail</label>
              </div>

              <Passwordinput/>

              <button type="submit" className={styles.button}>Login</button>
              <div className={styles.register_link}>
                <p>
                  Não tem conta? <a href="http://localhost:5173/registro">Registre-se</a>
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