import styles from '../css/Auth.module.css'
import { useEffect } from "react";
import Passwordinput from '../components/passwordinput.jsx'
import { useNavigate } from "react-router";
import api from '../services/api.jsx';

const Registro = () => {
    
  const navigate = useNavigate()

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await api.post("api/usuario/registrar", {
        headers: { 'Content-Type': 'application/json' },
        nome: formData.get("nome"),
        senha: formData.get("password"),
        email: formData.get("email"),
        ativo: true,
        cpf: formData.get("cpf"),
        telefone: formData.get("telefone")
      })
      if (res.statusText != 'Created') throw new Error("Usuario não registrado");
      alert("Usuario criado com sucesso")
      navigate("/Login")

    } catch (error) {
      alert('Usario não registrado')
      console.error("Erro:", error.message);
    }
  };

    useEffect(() => {

    }, []);


    return (

    <>
    <section className={styles.section}>
        <div className={`${styles.box} ${styles.registro}`}>

            <form id="form" onSubmit={handleSubmit}>
                <h2 className={styles.h2}>Torettos</h2>

                <div>
           
                    <div className={styles.box_input}>
                        <input type="string" required className={styles.login__input} name="nome" id="nome" placeholder=""/>
                        <label htmlFor="login__input" className={styles.login__label}>Nome</label>
                    </div>


          
                    <div className={`${styles.box_input} ${styles.email_input}`} id="email-input">
                        <input type="email" required className={styles.login__input} name="email" id="email" placeholder=""/>
                        <label htmlFor="login__input" className={styles.login__label}>E-mail</label>
                    </div>

            
                      <div className={styles.box_input}>
                        <input type="number" required className={styles.login__input} name="telefone" id="telefone" placeholder=""/>
                        <label htmlFor="login__input" className={styles.login__label}>Telefone</label>
                    </div>
        
                      <div className={styles.box_input}>
                        <input type="number" required className={styles.login__input} name="cpf" id="cpf" placeholder=""/>
                        <label htmlFor="login__input" className={styles.login__label}>CPF</label>
                    </div>

                    <Passwordinput/>

                </div>

                <button type="submit" className={styles.button}>Registrar-se</button>

                <div className={styles.register_link}>
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