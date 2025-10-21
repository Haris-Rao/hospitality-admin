import { BiSearch } from "react-icons/bi";
import { Input } from "../Input";

function SearchInput({
  value,
  setter,
  placeholder = "Search",
  customStyle,
  inputStyle,
  backgroundColor,
  iconColor = "var(--main-color)",
  onClick,
  variant = "primary",
}) {
  return (
    <Input
      setter={setter}
      value={value}
      variant={variant}
      customStyle={{
        width: "220px",
        border: "none",
        ...customStyle,
      }}
      inputStyle={{
        fontSize: "var(--fs-base)",
        border: "var(--input-border)",
        backgroundColor: "var(--input-background-color)",
        ...inputStyle,
      }}
      placeholder={placeholder}
      rightIcon={
        <span
          style={{
            borderRadius: "50%",
          }}
          onClick={() => onClick && onClick()}
        >
          <BiSearch
            size={20}
            color={"#ccc"}
            style={{
              marginTop: "-4px",
              marginRight: "-10px",
              cursor: "pointer",
            }}
          />
        </span>
      }
      onEnter={onClick}
    />
  );
}

export default SearchInput;
