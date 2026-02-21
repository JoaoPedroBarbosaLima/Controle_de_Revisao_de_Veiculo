import styles from '../css/Menu.module.css'
import api from '../services/api'
import { useNavigate } from "react-router";
import { useEffect,useState } from "react";
import { ValidarLogin } from '../services/auth';


const Menu = () => {

    const navigate = useNavigate()

    const [autorizado, setAutorizado] = useState(null) 
   

    useEffect(() => {
    
            async function validarLogin() {
                try {
                    const res = await ValidarLogin()

                    if(res.statusText != "OK") {
                        navigate("/login")
                    }

                        if(res.data === "ADMIN"){
                            setAutorizado(true)
                        } else{
                            setAutorizado(false)
                        }
    
                } catch(erro) {
                    console.error(erro)
                    navigate("/login")
                }
         
            }
    
            validarLogin()
    
        }, [navigate]);

         async function Logout() {
        try {
            const res = await api.get("api/usuario/logout", {
                withCredentials: 'include'
            })
            if (res.statusText == 'OK') navigate("/login")
                
        } catch (error) {
            console.log(error)
        }

    }

    if(autorizado == null){
        return <></>
    }

    if(autorizado == false){
        return(    
            <nav className={styles.nav}>
                <div className={styles.logo}>Torettos</div>
                <ul className={styles.nav_links}>
                    <li><a href="http://localhost:5173/dashboard">DASHBOARD</a></li>
                    <li><a href="http://localhost:5173/veiculos">VEICULOS</a></li>
                    <li><a href="http://localhost:5173/dados">DADOS</a></li>
                </ul>
                    <div className={styles.btns}>
                        <button className={styles.btn} onClick={Logout}>SAIR</button>
                    </div>
            </nav>
        )
    } else{
        return(    
            <nav className={styles.nav}>
                <div className={styles.logo}>Torettos</div>
                <ul className={styles.nav_links}>
                    <li><a href="http://localhost:5173/dashboard">DASHBOARD</a></li>
                    <li><a href="http://localhost:5173/veiculos">VEICULOS</a></li>
                    <li><a href="http://localhost:5173/dados">DADOS</a></li>
                    <li><a href="http://localhost:5173/funcionario">FUNCIONARIO</a></li>
                </ul>
                    <div className={styles.btns}>
                        <button className={styles.btn} onClick={Logout}>SAIR</button>
                    </div>
            </nav>
        )
    }

   

}

export default Menu