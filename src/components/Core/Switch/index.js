import PropTypes from "prop-types";
import classes from "./Switch.module.css";

export const Switch = ({ value, setter, disabled = false }) => {
  return (
    <div className={classes.switch}>
      <input type="checkbox" checked={value} disabled={disabled} />
      <span
        className={classes.slider}
        onClick={() => {
          !disabled && setter(!value);
        }}
      >
        {value ? "EN" : "AR"}
      </span>
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  setter: PropTypes.func,
  disabled: PropTypes.bool,
};
Switch.defaultProps = {
  value: false,
};
