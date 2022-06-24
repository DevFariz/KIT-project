import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Clients from "../Clients/Clients";
import Cases from "../Cases/Cases";

import styles from "./App.module.css";

import CasesImg from '../../images/cases-img.jpg'

const App = () => {

  const cases = [
    {title: 'КЕЙС ИНТЕРНЕТ-МАГАЗИНА СЕМЯН И САЖЕНЦЕВ РАСТЕНИЙ', image: CasesImg, investment: 764, income: 17700, duration: 1, id: 1},
    {title: 'КЕЙС ИНТЕРНЕТ-МАГАЗИНА СЕМЯН', image: CasesImg, investment: 500, income: 15500, duration: 1, id: 2},
    {title: 'КЕЙС ИНТЕРНЕТ-МАГАЗИНА САЖЕНЦЕВ РАСТЕНИЙ', image: CasesImg, investment: 985, income: 40350, duration: 2, id: 3}
  ]

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Header />
        </div>
      </header>
      <main>
        <section className={styles.intro}>
          <div className={styles.container}>
            <Intro />
          </div>
        </section>
        <section className={styles.clients}>
          <div className={styles.container}>
            <Clients />
          </div>
        </section>
        <section className={styles.cases}>
          <div className={styles.container}>
            <Cases cases={cases}/>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
