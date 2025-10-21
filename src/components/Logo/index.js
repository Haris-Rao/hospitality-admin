import Image from "next/image";
import styles from "./Logo.module.css";
import { cn } from "@/helper/HelperFunction";
import { useEffect, useState } from "react";
import { isMobileViewHook } from "@/customHooks/isMobileViewHook";
import { useTheme } from "next-themes";

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
      icon:
        theme === "light" ? "/images/Icon_dark.png" : "/images/Icon_light.png",
      logo:
        (mobile && !disableMobileChange) || isCollapsed
          ? theme === "light"
            ? "/images/Logo_dark.png"
            : "/images/Logo_light.png"
          : theme === "light"
          ? "/images/Logo_dark.png"
          : "/images/Logo_light.png",
      footer:
        theme === "light"
          ? "/images/Logo_dark.png"
          : "/images/Logo_light.png",
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
      <Image
        src={logoSrcVariant(theme)[variant]}
        alt="Logo"
        unoptimized={true}
        quality={100}
        layout="fill"
      />
    </div>
  );
}
