import { useEffect } from "react";
import Menu from "../components/menu";
import Alterardados from "../dados/alterardados";
import styles from '../css/Auth.module.css'

const Dados = () => {

    useEffect(() => {

    }, []);
    return (
        <>
            <Menu/>

            <section className={styles.section}>
                <Alterardados/>
            </section>

        </>
    )
}

export default Dados