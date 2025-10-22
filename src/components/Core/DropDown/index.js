"use client";
import Select, { components } from "react-select";
import VirtualizedSelect from "react-select-virtualized";
import classes from "./DropDown.module.css";
import PropTypes from "prop-types";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Label } from "../Label";
import { cn } from "@/helper/HelperFunction";
import "../Styles/styles.css";

export const DropDown = ({
  options,
  label,
  labelTwo,
  customStyle,
  disabled,
  value,
  setter,
  noBorder,
  placeholder,
  placeholderColor = "var(--placeholder-color)",
  isMulti,
  style,
  leftIcon,
  Components,
  labelClassName,
  labelStyle,
  indicatorColor = "var(--icon-color)",
  indicatorIcon,
  optionLabel,
  optionValue,
  singleValueColor = "var(--text-color)",
  customClassName = "DropdownOptionContainer",
  className,
  isSearchable = false,
  CustomOption,
  squared = false,
  error,
  errorText,
  isVirtualized = false,
  menuPlacement = "auto",
  variant = "primary",
  size = "md",
  ref,
  inline,
  ...props
}) => {
  const DropdownIndicator = (props) => {
    return (
      <>
        <style>
          {`
            .DropdownOptionContainer__indicator{
            border-radius: 8px;
            width: 30px;

            display:flex;
            align-items:center;
            justify-content:center;
            padding: 0px;
            }
          `}
        </style>
        <components.DropdownIndicator {...props}>
          {props?.selectProps?.menuIsOpen ? (
            indicatorIcon ? (
              indicatorIcon
            ) : (
              <IoIosArrowUp
                size={18}
                color={
                  variant === "transparent"
                    ? "var(--white-color)"
                    : indicatorColor
                }
              />
            )
          ) : indicatorIcon ? (
            indicatorIcon
          ) : (
            <IoIosArrowDown
              size={18}
              color={
                variant === "transparent"
                  ? "var(--white-color)"
                  : indicatorColor
              }
            />
          )}
        </components.DropdownIndicator>
      </>
    );
  };

  const dropDownStyle = {
    control: (styles, { isFocused, isDisabled, isSelected }) => ({
      ...styles,
      backgroundColor: isDisabled
        ? "var(--disabled-input-color)"
        : variant === "primary"
        ? "var(--input-background-color)"
        : "var(--input-background-color)",
      padding:
        variant === "primary"
          ? size === "md"
            ? "var(--input-padding-md)"
            : "var(--input-padding-sm)"
          : size === "md"
          ? "var(--input-padding-md)"
          : "var(--input-padding-sm)",
      color: "var(--tertiary-text-color)",
      boxShadow: "none",
      fontFamily: "var(--ff-primary-reg)",
      fontSize: "var(--fs-base)",
      letterSpacing: "1.4",
      cursor: "pointer",
      border: variant === "primary" ? "var(--input-border)" : "none",
      borderRadius: "var(--input-border-radius)",
      textTransform: "capitalize",
      minHeight: "unset",

      opacity: isDisabled ? 0.6 : 1,
      ...customStyle,

      ":hover": {
        ...styles[":hover"],
        border: variant === "secondary" ? "0px" : "var(--input-border)",
        ...customStyle,
      },
      ":placeholder": {
        ...styles[":placeholder"],
        color: "var(--text-color)",
        fontWeight: "700",
        fontFamily: "var(--ff-primary-bold)",
      },
      ":active": {
        ...styles[":active"],
        borderColor: "var(--input-border-color)",
      },
    }),

    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "var(--background-quaternary)",
      border: "1px solid var(--border-color)",
      borderRadius: "var(--border-radius)",
      zIndex: 10,
    }),

    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        fontFamily: "var(--ff-primary-med)",
        color:
          variant === "transparent" ? "var(--white-color)" : placeholderColor,
        fontSize: "var(--fs-100)",
      };
    },

    valueContainer: (provided) => ({
      ...provided,
      padding: "0px 0px",
    }),

    singleValue: (provided) => ({
      ...provided,
      color:
        variant === "transparent" ? "var(--white-color)" : singleValueColor,
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected && "var(--primary-color)",
        color: isSelected ? "var(--white-color)" : singleValueColor,
        padding: "8px 12px",
        fontFamily: "var(--ff-primary-reg)",
        textTransform: "capitalize",

        ":active": {
          ...styles[":active"],
          color: "#fff",
          backgroundColor:
            "color-mix(in srgb, var(--primary-color) 100%, white)",
        },
        ":hover": {
          ...styles[":hover"],
          backgroundColor:
            "color-mix(in srgb, var(--primary-color) 50%, white)",
          cursor: "pointer",
        },
      };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "var(--main-color)",
        borderRadius: "var(--global-border-radius)",
        padding: "1px 10px",
        fontFamily: "var(--ff-primary-reg)",
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#fff",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      fontSize: "var(--fs-base)",
      color: "#fff",
      ":hover": {
        color: "#fff",
      },
    }),
  };

  return (
    <div
      className={cn(
        classes.Container,
        className && className,
        inline && classes.inline
      )}
    >
      <style>{`
        .DropdownOptionContainer__menu {
          margin: 0px;
          border: 0px;
          z-index: 1100 !important;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
        }
      `}</style>
      {label && (
        <Label
          htmlFor={`dropdown${label}`}
          disabled={disabled}
          style={{ ...labelStyle }}
          // variant={inline && "inline"}
          variant={"secondary"}
        >
          {label} {labelTwo && labelTwo}
        </Label>
      )}

      <div className={`${[classes.dropdownContainer].join(" ")}`}>
        {!isVirtualized ? (
          <Select
            inputId={`dropdown${label}`}
            value={value}
            onChange={(e) => {
              setter(e);
            }}
            className={`${[classes.reactSelect].join(" ")}`}
            isMulti={isMulti}
            isSearchable={isSearchable}
            isDisabled={disabled}
            placeholder={placeholder}
            options={options}
            styles={{ ...dropDownStyle, ...style }}
            isClearable={false}
            classNamePrefix={customClassName}
            menuPlacement={menuPlacement}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: (e) => DropdownIndicator(e),
              ...(CustomOption && { Option: CustomOption }),
              ...Components,
            }}
            getOptionLabel={(option) => {
              return optionLabel ? option[optionLabel] : option.label;
            }}
            getOptionValue={(option) =>
              optionValue ? option[optionValue] : option.value
            }
            ref={ref}
            {...props}
          />
        ) : (
          <VirtualizedSelect
            inputId={`dropdown${label}`}
            value={value}
            onChange={(e) => {
              setter(e);
            }}
            className={`${[classes.reactSelect].join(" ")}`}
            isMulti={isMulti}
            isSearchable={isSearchable}
            isDisabled={disabled}
            placeholder={placeholder}
            formatOptionLabel={(option) => {
              return optionLabel ? option[optionLabel] : option.label;
            }}
            formatOptionValue={(option) => {
              return optionValue ? option[optionValue] : option.value;
            }}
            options={options}
            styles={{ ...dropDownStyle, ...style }}
            isClearable={false}
            classNamePrefix={customClassName}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: (e) => DropdownIndicator(e),
              ...(CustomOption && { Option: CustomOption }),
              ...Components,
            }}
            getOptionLabel={(option) => {
              return optionLabel ? option[optionLabel] : option.label;
            }}
            getOptionValue={(option) =>
              optionValue ? option[optionValue] : option.value
            }
            {...props}
          />
        )}
        {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
        {error && <p className={classes.errorText}>{errorText}</p>}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  labelTwo: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.object.isRequired,
  setter: PropTypes.object,
  disabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  customStyle: PropTypes.object,
  style: PropTypes.object,
  Components: PropTypes.object,
  labelClassName: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
};

DropDown.defaultProps = {
  placeholder: "Select Option",
  value: "aaaa",
  disabled: false,
  isMulti: false,
  options: [],
  Components: {},
};
