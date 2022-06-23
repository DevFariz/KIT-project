import styles from './Client.module.css';
import Clients1 from '../../images/clients-01.jpg'
import Clients2 from '../../images/clients-02.jpg'
import Clients3 from '../../images/clients-03.jpg'
import Clients4 from '../../images/clients-04.jpg'
import Clients5 from '../../images/clients-05.jpg'
import Clients6 from '../../images/clients-06.jpg'

const Clients = () => {
    return(
        <>
            <h2 className={styles.title}>мои клиенты</h2>
            <div className={styles.items}>
                <img src={Clients1} alt="bodo" />
                <img src={Clients2} alt="make up" />
                <img src={Clients3} alt="eldorado" />
                <img src={Clients4} alt="mycredit" />
                <img src={Clients5} alt="oxoronniy holding" />
                <img src={Clients6} alt="coaching up" />
            </div>
        </>
    )
}

export default Clients