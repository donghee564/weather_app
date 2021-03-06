import React, { useRef } from "react";
import styles from "./header.module.css";
import moment from "moment";
import { Search } from "react-bootstrap-icons";

const Header = ({ unit, timezone, current, handleUnitChange, onSearch }) => {
  let date = new Date();
  const day = current.dt * 1000;
  date.setTime(day);
  const inputRef = useRef();
  // 검색창 input 처리 함수
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  // 검색 input창 엔터를 누를시 handleSearch 함수 실행
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      inputRef.current.value = "";
    }
  };
  // 검색 아이콘 클릭시 handleSearch 함수 실행
  const onClick = () => {
    handleSearch();
    inputRef.current.value = "";
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
          placeholder="Search by City Name"
        />
        <button className={styles.searchIcon} onClick={onClick} type="submit">
          <Search />
        </button>
      </div>
    </section>
  );
};

export default Header;
