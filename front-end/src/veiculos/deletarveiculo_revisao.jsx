import {useEffect, useState} from "react"
import styles from "../css/app.module.css"
import { ValidarLogin } from "../services/auth";
import api from "../services/api";
const Deletarveiculo_revisao = () => {

    const [auturizado,setAutorizado] = useState(null)

    const handlesubmitdeleteveiculo = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        try{
            const res = await api.delete("api/veiculo", {
                data: { placa: formData.get("placa") },
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });

            if(res.statusText != "OK") throw new Error("Veiculo não deletado")
            alert("Veiculo Deletado com sucesso")

        } catch (erro){
            alert(`Não foi possivel deletar o veiculo de placa '${formData.get("placa")}'`)
            console.error(erro)
        }
        
    }

    const handlesubmitdeleterevisao = async (e) => {

        e.preventDefault()

        const formData = new FormData(e.target)

        try{
            const res = await api.delete("api/revisao", {
                data: { 
                    id_revisao: formData.get("id"),
                    placa_veiculo: formData.get("placa")
                 },
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });

            if(res.statusText != "OK") throw new Error("Revisao não foi Deletada")
            alert("Revisao Deletada com sucesso")
        } catch (erro){
            alert(`Não foi possivel deletar a revisão`)
            console.error(erro)
        }
        
    }

    useEffect(() => {
    
        async function exibirseadminoufuncionario() {
            try {
                const res = await ValidarLogin()

                if (res.data === "ADMIN" || res.data === "FUNCIONARIO") {
                    setAutorizado(true)
                } else {
                    setAutorizado(false)
                }

            } catch (erro) {
                console.error(erro)
                setAutorizado(false)
            }
        }

            exibirseadminoufuncionario()
    
    }, [])

    if(auturizado == null){
        return <></>
    }

    if(auturizado == false){
        return <></>
    }

    return (
        <section className={styles.tablesection}>
            <h2>Deletar veiculo</h2>
            <form onSubmit={handlesubmitdeleteveiculo}>
                <span className={styles.box_input}>
                    <input type="number" required name="placa"/>
                    <label htmlFor="">Placa do veiculo</label>
                </span>

                <span className={styles.box}>
                    <button type="submit" className={styles.button}>Deletar</button>
                </span>

            </form>

             <h2>Deletar revisão</h2>
            <form onSubmit={handlesubmitdeleterevisao}>
                <span className={styles.box_input}>
                    <input type="number" required name="id"/>
                    <label htmlFor="">Id da revisão</label>
                </span>

                <span className={styles.box_input}>
                    <input type="text" required name="placa"/>
                    <label htmlFor="">Placa do veiculo</label>
                </span>

                <span className={styles.box}>
                    <button type="submit" className={styles.button}>Deletar</button>
                </span>

            </form>

        </section>
    )
}

export default Deletarveiculo_revisao