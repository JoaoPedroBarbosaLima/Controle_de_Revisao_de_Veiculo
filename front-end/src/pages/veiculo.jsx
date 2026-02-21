import { useEffect } from "react";
import Menu from "../components/menu";
import ListVeiculos from "../veiculos/Listveiculos";
import Registrarveiculo from "../veiculos/registrarveiculo";
import styles from '../css/app.module.css'
import Deletarveiculo_revisao from "../veiculos/deletarveiculo_revisao";

const Veiculo = () => {


    useEffect(() => {


    }, []);
    return (
        <>
            <Menu/>
            <section className={styles.section}>
                    <Registrarveiculo/>
                    <Deletarveiculo_revisao/>
                    <ListVeiculos/>
            </section>

        </>
    )
}

export default Veiculo