import styles from "./CasesItem.module.css";

const CasesItem = ({ title, image, investment, income, duration }) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt="case" />
      <h3 className={styles.title}>{title}</h3>
      <ul>
        <li className={styles.text}>
          <span className={styles.bold}>{investment}$</span> вложили в рекламу
        </li>
        <li className={styles.text}>
          <span className={styles.bold}>{income}$</span> доход с рекламы
        </li>
        <li className={styles.text}>
          <span className={styles.bold}>{duration} месяц</span> работы рекламы
        </li>
      </ul>
    </div>
  );
};

export default CasesItem;
