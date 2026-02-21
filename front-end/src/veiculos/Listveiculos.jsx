import { useEffect, useState } from "react";
import api from "../services/api";
import styles from '../css/app.module.css'

// Função para formatar datas no formato 'dd/mm/yyyy'
const formatarData = (data) => {
    const dateObj = new Date(data);
    return new Intl.DateTimeFormat('pt-BR').format(dateObj); // Retorna a data formatada como 'dd/mm/yyyy'
};

const ListVeiculos = () => {
    const [veiculos, setVeiculos] = useState([])
    const [busca,setBusca] = useState('')

    const pesquisa = veiculos.filter(veiculo => veiculo.placa.toLowerCase().includes(busca.toLowerCase()))

    useEffect(() => {
        api.get('api/veiculo', {
            withCredentials: true
        }).then(res => {
            setVeiculos(res.data);
        }).catch(erro => {
            console.log(erro);
        });
    }, []);

    return (
        <section className={styles.tablesection}>

            <h2>Lista de veiculos</h2>
            
            <div className={styles.box_pesquisa} id="busca_input">
                <input type="text" placeholder=""  onChange={(e) => setBusca(e.target.value)}/>
                <label htmlFor="busca_input">Buscar placa</label>
            </div>
            <div className={styles.container}>

            {pesquisa.length > 0? (
                <>
                    {pesquisa.slice(0, 10).map(veiculo => (
                        <div key={veiculo.placa} className={styles.tabeladiv}>
                            <table>
                                <thead>
                                    <tr className={styles.thtop}>
                                        <th>Placa</th>
                                        <th>Cor</th>
                                        <th>Modelo</th>
                                        <th>Marca</th>
                                        <th>CPF Responsável</th>
                                        <th>Tipo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{veiculo.placa}</td>
                                        <td>{veiculo.cor}</td>
                                        <td>{veiculo.modelo}</td>
                                        <td>{veiculo.marca}</td>
                                        <td>{veiculo.cpf_responsavel}</td>
                                        <td>{veiculo.tipo}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Título para a Tabela de Revisões */}
                            

                            {/* Tabela de Revisões */}
                            {veiculo.revisao && veiculo.revisao.length > 0 ? (
                                
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Número da revisão</th>
                                            <th>CPF Funcionário</th>
                                            <th>Data Revisão</th>
                                            <th>Data Próxima Revisão</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {veiculo.revisao.map(rev => (
                                            <tr key={rev.id_revisao}>
                                                <td>{rev.id_revisao}</td>
                                                <td>{rev.cpf_funcionario}</td>
                                                <td>{formatarData(rev.data_revisao)}</td>
                                                <td>{formatarData(rev.data_prox_revisao)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className={styles.nadaregistrado}>Nenhuma revisão registrada</div>
                            )}

                        </div>
                    ))}
                </>
            ) : (
                <p>Nenhum veículo registrado</p>
            )}
            </div>
        </section>
    );
};

export default ListVeiculos;