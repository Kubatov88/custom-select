import React, { useState } from "react";
import styles from './selectBox.module.css';

const SelectBox = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles["select-box"]}>
      <div className={`${styles["options-container"]} ${isOpen ? styles.active : ""}`}>
        {options.map((option) => (
          <div
            key={option}
            className={styles.option}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className={styles.selected} onClick={toggleDropdown}>
        {label}
        <div className={styles.arrow}></div>
      </div>
    </div>
  );
};

export default SelectBox;
