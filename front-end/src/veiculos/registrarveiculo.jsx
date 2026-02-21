import { useEffect, useState } from "react"
import api from "../services/api"
import { ValidarLogin } from "../services/auth"
import styles from "../css/app.module.css"


const Registrarveiculo = () => {

    const [autorizado, setAutorizado] = useState(null) 
    // null = ainda carregando
    // true = pode acessar
    // false = não pode acessar

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

    const handlesubmitveiculo = async (e) =>{

        e.preventDefault()

        const formData = new FormData(e.target)

        try {
            const res = await api.post("api/veiculo", 
                {
                    placa: formData.get("placa"),
                    quilometragem: formData.get("quilometragem"),
                    cor: formData.get("cor"),
                    modelo: formData.get("modelo"),
                    marca: formData.get("marca"),
                    cpf_responsavel: parseInt(formData.get("cpf")),
                    tipo: formData.get("tipo")
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            )

            if(res.statusText != "Created") throw new Error("Veiculo não registrado")
            alert("Veiculo registrado com sucesso")

        } catch (erro) {
            console.error(erro)
        }

    }

    const handlesubmitrevisao= async (e) =>{

        e.preventDefault()

        const formData = new FormData(e.target)

        try {
            const res = await api.post("api/revisao", 
                {
                    placa: formData.get("placa"),
                    data_prox_revisao: formData.get("data_prox_revisao"),
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            )

            console.log(res)

            if(res.statusText != "OK") throw new Error("Revisão não registrada")
            alert("Revisão registrada com sucesso")

        } catch (erro) {
            console.error(erro)
        }

    }

    
    if (autorizado === null) {
        return <></>
    }

    if (autorizado === false) {
        return <></>
    }

    return (
        <section className={styles.tablesection}>
            <div>
                <h2>Registrar veiculo</h2>
                <form onSubmit={handlesubmitveiculo}>
                    <div className={styles.box}>
                        <span className={styles.box_input}>
                            <input type="number" required name="placa"/>
                            <label htmlFor="">Placa do veiculo</label>
                        </span>
                        <span className={styles.box_input}>
                            <input type="text" required name="cor" />
                            <label htmlFor="">Cor</label>
                        </span>

                        <span className={styles.box_input}>
                            <input type="text" required name="modelo"/>
                            <label htmlFor="">Modelo</label>
                        </span>

                        <span className={styles.box_input}>
                            <input type="number" required name="quilometragem" />
                            <label htmlFor="">quilometragem</label>
                        </span>

                    </div>

                    <div className="box_input">

                        <span className={styles.box_input}>
                            <input type="text" required name="marca"/>
                            <label htmlFor="">Marca</label>
                        </span>

                        <span className={styles.box_input}>
                            <input type={styles.box_input} required name="cpf" />
                            <label htmlFor="">cpf do responsavel</label>
                        </span>

                        <span className={styles.box_input_opt}>
                                <select id="tipo" name="tipo">
                                    <option defaultValue={null}>Tipo de veiculo</option>
                                    <option value="CARRO">Carro</option>
                                    <option value="MOTO">Moto</option>
                                </select>
                            <label htmlFor="">tipo</label>
                        </span>

                        <div className={styles.box}>
                            <button type="submit" className={styles.button}>Registrar</button>
                        </div>
                    </div>
                </form>
            </div>

            <div>

                <h2>Registrar revisao</h2>
                <form onSubmit={handlesubmitrevisao}>

                    <div className={styles.box}>
                        <span className={styles.box_input}>
                            <input type="number" required name="placa"/>
                            <label htmlFor="">Placa do veiculo</label>
                        </span>

                        <span className={`${styles.box_input} ${styles.data}`}>
                            <input type="date" required name="data_prox_revisao" />
                            <label htmlFor="">data proxima revisao</label>
                        </span>
                        
                        <button type="submit" className={styles.button}>Registrar</button>

                    </div>
                </form>

            </div>
        </section>


        

    )
}

export default Registrarveiculo