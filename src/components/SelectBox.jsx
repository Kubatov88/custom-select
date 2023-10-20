import React, { useState } from "react";

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
    <div className="select-box">
      <div className={`options-container ${isOpen ? "active" : ""}`}>
        {options.map((option) => (
          <div
            key={option}
            className="option"
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="selected" onClick={toggleDropdown}>
        {label}
      </div>
    </div>
  );
};

export default SelectBox;
