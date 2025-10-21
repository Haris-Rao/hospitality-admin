"use client";
import PropTypes from "prop-types";
import "../Styles/styles.css";
import classes from "./LinkInput.module.css";
import { Label } from "../Label";
import { cn } from "@/helper/HelperFunction";

export const LinkInput = ({
  type,
  label,
  label2, // sub label
  value, // input value
  setter, //setValue
  noBorder,
  placeholder,
  disabled,
  parentCustomStyle, //Main Div Inline Style
  customStyle, //Input Container inline Style
  inputStyle, //Input inline Style
  labelStyle, //Label inline Style
  error, // Show Error Boolean
  errorText, // Error Text
  leftIcon, // Icon For Input
  rightIcon,
  labelOnTop = false,
  onEnter,
  variant = "primary",
  size = "md",
  customContainerClass,
  ref,
  id,
  inline,
  ...props
}) => {
  let inputContainerStyleObject = Object.assign(
    {},
    error && { border: `1px solid red ` },
    leftIcon && { paddingLeft: "50px" }
  );
  return (
    <>
      <div
        className={cn(
          classes.Container,
          labelOnTop && classes.labelOnTop,
          value && classes.hasValue,
          inline && classes.inline
        )}
        style={{ ...parentCustomStyle }}
      >
        {label && (
          <Label
            htmlFor={`input${label}`}
            disabled={disabled}
            labelOnTop={labelOnTop}
            style={{ ...labelStyle }}
            variant={inline && "inline"}
          >
            {label} {label2 && label2}
          </Label>
        )}
        <div
          className={cn(
            classes.inputPassContainer,
            customContainerClass && customContainerClass
          )}
          style={{ ...customStyle }}
        >
          {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}

          <div className={classes.link}>
            <p>https://</p>
          </div>
          <input
            value={value}
            onKeyDown={(e) => {
              if (onEnter) {
                if (value === "") return;
                if (e.key == "Enter") {
                  onEnter();
                }
              }
            }}
            ref={ref}
            onChange={(e) => {
              setter(
                e.target.value.startsWith("https://")
                  ? e.target.value.replace("https://", "")
                  : e.target.value.replace("http://", "")
              );
            }}
            disabled={disabled}
            placeholder={!labelOnTop && placeholder}
            id={id}
            data-variant={variant}
            data-size={size}
            className={cn(
              classes.inputBox,
              noBorder && classes.noBorder,
              labelOnTop && classes.labelOnTop__input
            )}
            style={{ ...inputContainerStyleObject, ...inputStyle }}
            onBlur={(e) => {
              setter(e.target.value?.trim());
            }}
            {...props}
          />
          {rightIcon && <div className={classes.rightIcon}>{rightIcon}</div>}
        </div>
        {error && (
          <p
            className={cn(
              classes.errorText,
              type == "password" || rightIcon
                ? classes.offsetLeftError
                : undefined
            )}
          >
            {errorText}
          </p>
        )}
      </div>
    </>
  );
};

LinkInput.propTypes = {
  type: PropTypes.oneOf.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  setter: PropTypes.string,
  noBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  label2: PropTypes.string,
};

LinkInput.defaultProps = {
  type: "text",
  placeholder: "Enter Link",
  value: "",
  noBorder: false,
  disabled: false,
  error: false,
  errorText: "An error has occurred, check your details!",
};
