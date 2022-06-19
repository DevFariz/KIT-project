import Header from "../Header/Header"

import styles from "./App.module.css"

const App = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Header />
            </div>
        </header>
    )
}

export default App