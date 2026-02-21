import {useEffect, useState} from "react"
import api from "../services/api"
import styles from '../css/app.module.css'

const ListFuncinarios = () => {

    const [funcionarios,setFuncionarios] = useState([])
    const [busca,setBusca] = useState('')
    
    const pesquisa = funcionarios.filter(funcionario => String(funcionario.cpf).includes(busca.toLowerCase()))
    
    useEffect(() => {
        api.get('api/funcionario', {
            withCredentials: true
        }).then(res => {
            setFuncionarios(res.data)
        }).catch(erro => {
            console.log(erro)
        })

    }, []);

    return (
        <section>

            <h2>Lista de Funcionarios</h2>
            
            <div className={styles.box_pesquisa} id="busca_input">
                <input type="number" placeholder=""  onChange={(e) => setBusca(e.target.value)}/>
                <label htmlFor="busca_input">Buscar cpf</label>
            </div>

            <div className={styles.container}>

                {pesquisa.length > 0? ( 

                    <div  className={styles.tabeladiv}>
                    <table>
                        <thead>
                            <tr className={styles.thtop}>
                                <th>Cpf</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pesquisa.map(funcionario => (
                                <tr key={funcionario.cpf}>
                                    <td>{funcionario.cpf}</td>
                                    <td>{funcionario.nome}</td>
                                    <td>{funcionario.telefone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>

                 ): (
                    <div className={styles.nadaregistrado}>Nenhuma revisão registrada</div>
                 )}

            </div>
        </section>
    )
}

export default ListFuncinarios