import { Label } from "../Label";
import classes from "./Radio.module.css";
import PropTypes from "prop-types";

export const Radio = ({
  value,
  setValue,
  label,
  labelStyles,
  disabled,
  variant = "default",
}) => {
  const isSelected = value === label;

  return (
    <div
      className={`my-2 ${classes.radioWithLabel} ${
        variant === "secondary" ? classes.radioCard : ""
      } ${variant === "secondary" && isSelected ? classes.selected : ""} ${
        variant === "secondary" && !isSelected ? classes.unselected : ""
      } ${disabled ? classes.disabled : ""}`}
      onClick={() => variant === "secondary" && !disabled && setValue(label)}
    >
      <input
        type="radio"
        id={`radio${label}`}
        checked={value === label && "checked"}
        disabled={disabled}
        onChange={(e) => {
          setValue(label);
        }}
        className={`${[classes.radioInput].join(" ")} ${
          variant === "secondary" ? classes.radioInputSecondary : ""
        }`}
      />
      {label && (
        <Label
          htmlFor={`radio${label}`}
          style={{ ...labelStyles, marginBottom: "0px" }}
          className={`${
            variant === "secondary" ? classes.radioLabelSecondary : ""
          } ${
            variant === "secondary" && isSelected ? classes.selectedLabel : ""
          } ${
            variant === "secondary" && !isSelected
              ? classes.unselectedLabel
              : ""
          }`}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

Radio.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "secondary"]),
};
Radio.defaultProps = {
  value: false,
  disabled: false,
  label: null,
  variant: "default",
};
