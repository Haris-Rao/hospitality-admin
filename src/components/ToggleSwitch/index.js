import classes from "./ToggleSwitch.module.css";

function ToggleSwitch({
  isActive = false,
  onToggle,
  label = "",
  disabled = false,
  size = "medium", // small, medium, large
}) {
  const handleClick = () => {
    if (!disabled && onToggle) {
      onToggle(!isActive);
    }
  };

  return (
    <div className={classes.toggleContainer}>
      {label && <span className={classes.toggleLabel}>{label}</span>}
      <div
        className={`${classes.toggleSwitch} ${classes[size]} ${
          isActive ? classes.toggleActive : ""
        } ${disabled ? classes.disabled : ""}`}
        onClick={handleClick}
        role="switch"
        aria-checked={isActive}
        aria-label={label || "Toggle switch"}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <div className={classes.toggleHandle}></div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
