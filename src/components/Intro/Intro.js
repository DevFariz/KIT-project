import styles from "./Intro.module.css";
import Item1 from "../../images/introItem-1.jpg";
import Item2 from "../../images/introItem-2.jpg";
import Telegram from "../../images/telegram.png";
import Viber from "../../images/viber.png";
import Whatsapp from "../../images/whatsapp.png";

const Intro = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Увеличу продажи в 3 раза с помощью GOOGLE/ FACEBOOK рекламы
            используя <span className={styles.blue}>авторскую методику</span>
          </h1>
          <p className={styles.description}>
            Получите аудит и <span>10 000 грн.</span> для вашей компании
            бесплатно только до конца недели
          </p>
          <div className={styles.items}>
            <p className={`${styles.blue} ${styles.text}`}>0 грн</p>
            <p className={styles.text}>7 000 грн</p>
            <img src={Item1} alt="item" />
            <img src={Item2} alt="item" />
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.formTop}>
            <h3 className={styles.formTitle}>оставить заявку</h3>
            <p className={styles.formText}>
              Введите свой номер телефона и мы свяжемся с Вами
            </p>
          </div>
          <div className={styles.formMiddle}>
            <input placeholder="Введите имя" type="text" className={styles.inp} />
            <input placeholder="+994-XX-XXX-XX-XX" type="tel" className={styles.inp} />
          </div>
          <div className={styles.formBottom}>
            <button className={styles.btn}>отправить заявку</button>
            <div className={styles.socials}>
                <div className={styles.social}>
                    <img src={Telegram} alt="telegram" />
                </div>
                <div className={styles.dot}></div>
                <div className={styles.social}>
                    <img src={Viber} alt="viber" />
                </div>
                <div className={styles.dot}></div>
                <div className={styles.social}>
                    <img src={Whatsapp} alt="whatsapp" />
                </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default Intro;
