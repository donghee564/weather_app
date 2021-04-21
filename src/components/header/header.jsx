import React, { useRef } from "react";
import styles from "./header.module.css";
import moment from "moment";
import { Search } from "react-bootstrap-icons";

const Header = ({ unit, timezone, current, handleUnitChange, onSearch }) => {
  let date = new Date();
  const day = current.dt * 1000;
  date.setTime(day);
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <section className={styles.header}>
      <h2 className={styles.city}>{timezone}</h2>
      <p className={styles.currDate}>
        {moment(date).format("dddd")}, {moment(date).format("MMM Do")}
      </p>
      <ul className={styles.units}>
        <li>
          <label className={styles.radioBtn}>
            <input
              className={styles.input}
              type="radio"
              name="degree-unit"
              id="celsius"
              value="celsius"
              checked={unit === "celsius"}
              onChange={handleUnitChange}
            />
            <span className={styles.checkMark}></span>
            °C
          </label>
        </li>
        <li>
          <label className={styles.radioBtn}>
            <input
              className={styles.input}
              type="radio"
              name="degree-unit"
              id="fahrenheit"
              value="fahrenheit"
              checked={unit === "fahrenheit"}
              onChange={handleUnitChange}
            />
            <span className={styles.checkMark}></span>
            °F
          </label>
        </li>
      </ul>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          onKeyPress={onKeyPress}
          ref={inputRef}
          type="search"
          placeholder="Search City Name"
        />
        <button className={styles.searchIcon} onClick={onClick} type="submit">
          <Search />
        </button>
      </div>
    </section>
  );
};

export default Header;
