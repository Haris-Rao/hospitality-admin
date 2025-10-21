import { useTheme } from "@/customHooks/useTheme";
import classes from "./ThemeSelector.module.css";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeSelector({
  moonColor = "var(--primary-color)",
  sunColor = "var(--white-color)",
}) {
  const { theme, setTheme } = useTheme();
  return (
    <span className={classes.themeSelector}>
      {theme === "light" ? (
        <FaMoon onClick={() => setTheme("dark")} size={16} color={moonColor} />
      ) : (
        <FaSun color={sunColor} onClick={() => setTheme("light")} size={16} />
      )}
    </span>
  );
}
