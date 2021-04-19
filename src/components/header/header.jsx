import styles from "./header.module.css";
import moment from "moment";

const Header = ({ timezone, current }) => {
  let date = new Date();
  const day = current.dt * 1000;
  date.setTime(day);

  return (
    <section className={styles.header}>
      <h2 className={styles.city}>{timezone}</h2>
      <p className={styles.currDate}>
        {moment(date).format("dddd")}, {moment(date).format("MMM Do")}
      </p>
    </section>
  );
};

export default Header;
