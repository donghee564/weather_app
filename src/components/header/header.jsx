import styles from "./header.module.css";
import moment from "moment";

const Header = ({ unit, timezone, current, handleUnitChange }) => {
  let date = new Date();
  const day = current.dt * 1000;
  date.setTime(day);

  return (
    <section className={styles.header}>
      <h2 className={styles.city}>{timezone}</h2>
      <p className={styles.currDate}>
        {moment(date).format("dddd")}, {moment(date).format("MMM Do")}
      </p>
      <ul className={styles.units}>
        <li>
          <input
            className={styles.celsius}
            type="radio"
            name="degree-unit"
            id="celsius"
            value="celsius"
            checked={unit === "celsius"}
            onChange={handleUnitChange}
          />
          <span className={styles.radioControl}></span>
          <label htmlFor="celsius"> °C</label>
        </li>
        <li>
          <input
            className={styles.fahrenheit}
            type="radio"
            name="degree-unit"
            id="fahrenheit"
            value="fahrenheit"
            checked={unit === "fahrenheit"}
            onChange={handleUnitChange}
          />
          <span className={styles.radioControl}></span>
          <label htmlFor="fahrenheit"> °F</label>
        </li>
      </ul>
    </section>
  );
};

export default Header;
