import styles from "./Logo.module.css";
import { cn } from "@/helper/HelperFunction";
import { useEffect, useState } from "react";
import { isMobileViewHook } from "@/customHooks/isMobileViewHook";
import { useTheme } from "@/customHooks/useTheme";
import { Logo_Dark, Logo_Light } from "@/constant/imagePath";

export default function Logo({
  variant = "logo",
  type,
  isCollapsed,
  disableMobileChange = false,
  customClass,
}) {
  const { theme } = useTheme();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (!disableMobileChange) {
      isMobileViewHook(setMobile, 480);
    }
  }, [disableMobileChange]);

  const logoSrcVariant = (theme = "light") => {
    return {
      icon: theme === "light" ? Logo_Dark : Logo_Light,
      logo:
        (mobile && !disableMobileChange) || isCollapsed
          ? theme === "light"
            ? Logo_Dark
            : Logo_Light
          : theme === "light"
          ? Logo_Dark
          : Logo_Light,
      footer: theme === "light" ? Logo_Dark : Logo_Light,
    };
  };

  return (
    <div
      className={cn(
        styles.logo,
        type === "footer" && styles.footerLogo,
        type === "header" && styles.headerLogo,
        customClass
      )}
    >
      <img src={logoSrcVariant(theme)[variant]} alt="Logo" />
    </div>
  );
}
