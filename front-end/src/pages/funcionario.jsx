/* eslint-disable no-unused-vars */
import Menu from "../components/menu"
import { ValidarLogin } from "../services/auth";
import { useEffect} from "react";
import { useNavigate } from "react-router";
import api from "../services/api";
import ListFuncinarios from "../funcionario/Listfuncinarios";
import styles from '../css/app.module.css'

const Funcionario = () => {

    const navigate = useNavigate()

    const handlesubmit = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.target);

        const res = await api.post("api/funcionario",
            {
                cpf: formData.get('cpf')
            },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
    )

    }

    useEffect(() => {
    
            async function validarLogin() {
                try {
                    const res = await ValidarLogin()

                    if(res.data != "ADMIN"){
                        navigate('/Home')
                    }
    
                } catch(erro) {
                    console.error(erro)
                    navigate("/Login")
                }
         
            }
    
            validarLogin()
    
        }, [navigate]);

    return (

        <>
            <Menu/>
            <section className={styles.section}>
                <section className={styles.tablesection}>
                    <h2>Registrar</h2>
                    <form onSubmit={handlesubmit}>
                        <span className={styles.box_input}>
                            <input type="number" required name="cpf"/>
                            <label htmlFor="">Cpf do funcionario</label>
                        </span>
                        <button type="submit" className={styles.button}>Registrar</button>
                    </form>
                <ListFuncinarios/>
                </section>
            </section>

        </>
    )

}

export default Funcionario