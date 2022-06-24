import CasesItem from "../Cases-item/CasesItem";
import Button from "../Button/Button";

import styles from "./Cases.module.css";

const Cases = ({ cases }) => {
  const items = cases.map((item) => {
    const { id, ...itemProps } = item;
    return <CasesItem key={id} {...itemProps} />;
  });

  return (
    <>
      <h2 className={styles.title}>
        Мои <span>кейсы</span>
      </h2>
      <div className={styles.cases__container}>{items}</div>
      <Button text="смотреть больше" />
    </>
  );
};

export default Cases;
