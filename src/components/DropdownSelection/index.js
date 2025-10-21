"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SearchInput from "../Core/SearchInput";
import classes from "./DropdownSelection.module.css";

export default function DropdownSelection({
  label = "Select Room",
  options = [],
  value = null,
  onChange = () => {},
  placeholder = "Search...",
  disabled = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (searchTerm?.trim() === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options?.filter((option) =>
        option?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchTerm, options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current?.contains(event?.target)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchTerm("");
      }
    }
  };

  const selectedOption = value
    ? options?.find((opt) => opt?.value === value?.value)
    : null;

  return (
    <div
      className={`${classes.dropdownContainer} ${className}`}
      ref={dropdownRef}
    >
      <div className={classes.label}>{label}</div>

      <div
        className={`${classes.dropdownTrigger} ${isOpen ? classes.open : ""} ${
          disabled ? classes.disabled : ""
        }`}
        onClick={handleToggle}
      >
        <span className={classes.selectedValue}>
          {selectedOption ? selectedOption.label : label}
        </span>
        {isOpen ? (
          <IoIosArrowUp className={classes.arrow} />
        ) : (
          <IoIosArrowDown className={classes.arrow} />
        )}
      </div>

      {isOpen && (
        <div className={classes.dropdownMenu}>
          <div className={classes.searchContainer}>
            <SearchInput
              placeholder={placeholder}
              value={searchTerm}
              customStyle={{ width: "100%" }}
              setter={setSearchTerm}
            />
          </div>

          <div className={classes.optionsList}>
            {filteredOptions?.length > 0 ? (
              filteredOptions?.map((option) => (
                <div
                  key={option?.value}
                  className={`${classes.option} ${
                    selectedOption && selectedOption?.value === option?.value
                      ? classes.selected
                      : ""
                  }`}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                >
                  {option?.label}
                </div>
              ))
            ) : (
              <div className={classes.noOptions}>No rooms found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
