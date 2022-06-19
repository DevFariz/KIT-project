import styles from "./Header.module.css";
import Tel from "../../images/logo.png";

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <img src={Tel} alt="logo" />
        </div>
        <div className={styles.right}>
            <a href="tel:380689588546" className={styles.phone__link}>+380689588546</a>
            <button className={styles.btn}>отправить заявку</button>
            <div className={styles.burger}>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
            </div>
        </div>
    </div>
  );
};

export default Header;
