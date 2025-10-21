import React from "react";
import "../Styles/styles.css";
import classes from "./CustomPhoneInput.module.css";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import { Label } from "../Label";
import { cn } from "@/helper/HelperFunction";

const PhoneNumberInput = ({
  label,
  value,
  setter,
  disabled,
  error = false,
  placeholder = "Phone Number",
  defaultCountry = "",
  containerClass,
  phoneInputClass,
  errorText,
  size = "md",
  variant = "primary",
  inline,
}) => {
  return (
    <div
      className={cn(
        classes.phoneNumberDiv,
        containerClass && containerClass,
        inline && classes.inline
      )}
    >
      {label && (
        <Label variant={inline ? "inline" : "secondary"}>{label}</Label>
      )}
      <PhoneInput
        placeholder={placeholder}
        value={value}
        onChange={setter}
        disabled={disabled}
        className={[
          classes.phoneNumberInput,
          phoneInputClass && phoneInputClass,
          error ? classes.error : "",
        ].join(" ")}
        defaultCountry={defaultCountry}
        international
        countryCallingCodeEditable={false}
        data-size={size}
        data-variant={variant}
      />
      {error && (
        <p className={`${[classes.errorText].join(" ")}`}>{errorText}</p>
      )}
    </div>
  );
};

export default PhoneNumberInput;
