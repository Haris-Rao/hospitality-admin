"use client";

import { useState } from "react";
import classes from "./FilterOption.module.css";

export default function FilterOption({
  options = [],
  selectedValue,
  onSelect,
  label = "Filter Options",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${classes.filterOptionContainer} ${className}`}>
      <div className={classes.optionsContainer}>
        {options.map((option, index) => (
          <div
            key={option.value}
            className={`${classes.filterOption} ${
              selectedValue === option.value ? classes.selected : ""
            }`}
            onClick={() => {}}
          >
            <span className={classes.optionLabel}>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
