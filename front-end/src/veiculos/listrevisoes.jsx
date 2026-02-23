import {useEffect, useState} from "react"
import api from "../services/api";
import styles from '../css/app.module.css'


const formatarData = (data) => {
    const dateObj = new Date(data);
    return new Intl.DateTimeFormat('pt-BR').format(dateObj); // Retorna a data formatada como 'dd/mm/yyyy'
};

const Listrevisoes = () => {

    const [revisoes,setRevisoes] = useState([])
    const [busca,setBusca] = useState('')
    const pesquisa = revisoes
    .filter(revisao =>
        revisao.placa_veiculo.toLowerCase().includes(busca.toLowerCase())
    )
    .sort((a, b) => 
        new Date(a.data_prox_revisao) - new Date(b.data_prox_revisao)
    );
    
    useEffect(() => {
        api.get('api/revisao', {
            withCredentials: true
        }).then(res => {
            setRevisoes(res.data)
        }).catch(erro => {
            console.log(erro)
        })

    }, []);

    return (
        <section className={styles.tablesection}>

            <h2>Revisões</h2>

            <div className={styles.box_pesquisa} id="busca_input">
                <input type="text" placeholder=""  onChange={(e) => setBusca(e.target.value)}/>
                <label htmlFor="busca_input">Buscar placa</label>
            </div>

            <div className={styles.container}>

            {pesquisa.length > 0 ? (
                <div className={styles.tabeladiv}>
                    <table>
                        <thead>
                            <tr>
                                <th>Número da revisão</th>
                                <th>Placa do veículo</th>
                                <th>Data Revisão</th>
                                <th>Data Próxima Revisão</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pesquisa.map(revisao => (
                                <tr key={revisao.id_revisao}>
                                    <td>{revisao.id_revisao}</td>
                                    <td>{revisao.placa_veiculo}</td>
                                    <td>{formatarData(revisao.data_revisao)}</td>
                                    <td>{formatarData(revisao.data_prox_revisao)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Nenhuma revisão</p>
            )}
            </div>
        </section>
    )
}

export default Listrevisoes