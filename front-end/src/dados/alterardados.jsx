import { useEffect } from "react"
import api from "../services/api"
import { useState } from "react"
import styles from '../css/Auth.module.css'

const Alterardados = () => {



    const [usuario,setUsuario] = useState([])
    useEffect(() => {
        api.get('api/usuario/cliente', {
            withCredentials: true,
        }).then(res => {
            setUsuario(res.data)
        }).catch(erro => {
            console.log(erro)
        })
    },[])


    const handlesubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const res = await api.put("api/usuario/update", 
            {
                nome: formData.get('nome'),
                email: formData.get('email'),
                telefone: formData.get('telefone')
            },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
        )

        alert(res.data)

    }

    return (
        
        <div className={`${styles.box} ${styles.dados}`}>

            <form id="form" onSubmit={handlesubmit}>
                <h2 >Dados da conta</h2>

                <div className={styles.box_input}>
                    <input type="text" required  name="nome" id="nome" defaultValue={usuario.nome}/>
                    <label htmlFor="login__input">Nome</label>
                </div>

                <div  id="email-input" className={styles.box_input}>
                    <input type="email" required  name="email" id="email" defaultValue={usuario.email}/>
                    <label htmlFor="login__input" >E-mail</label>
                </div>
        
                <div className={styles.box_input}>
                    <input type="number" required  name="telefone" id="telefone" defaultValue={usuario.telefone}/>
                    <label htmlFor="login__input">Telefone</label>
                </div>

                <button type="submit" className={styles.button}>Alterar</button>
                
            </form>

        </div>


    )

}

export default Alterardados