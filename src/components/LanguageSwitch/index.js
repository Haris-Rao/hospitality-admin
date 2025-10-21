"use client";

import { usePathname, useRouter } from "next/navigation";
import { Switch } from "../Core/Switch";

export default function LanguageSwitcher({ lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameWithoutLang = pathname.replace(`/${lang}`, "") || "/";
  const handleLangChange = (e) => {
    window.location.href = `/${e ? "en" : "ar"}${pathnameWithoutLang}`;
  };

  return (
    <div>
      <Switch value={lang === "en"} setter={(e) => handleLangChange(e)} />
    </div>
  );
}
