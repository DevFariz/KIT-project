import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Clients from "../Clients/Clients";

import styles from "./App.module.css";

const App = () => {
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
      </main>
    </>
  );
};

export default App;
