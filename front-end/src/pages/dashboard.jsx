import { useEffect } from "react";
import Menu from "../components/menu";
import Listrevisoes from "../veiculos/listrevisoes";
import styles from '../css/app.module.css'

const Dashboard = () => {

    useEffect(() => {

    

    }, []);
    return (
        <>
            <Menu/>
            <section className={styles.section}>
                <div>
                    <Listrevisoes/>
                </div>
            </section>
        </>
    )
}

export default Dashboard