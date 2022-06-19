import Header from "../Header/Header";
import Intro from "../Intro/Intro";

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
      </main>
    </>
  );
};

export default App;
