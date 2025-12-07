"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect current language based on URL
  const currentLang = pathname.startsWith("/fa") ? "fa" : "en";

  const changeLang = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  useEffect(() => {
    document.documentElement.dir = currentLang === "fa" ? "rtl" : "ltr";
  }, [currentLang]);

  return (
    <div className="flex flex-row items-center gap-2 rotate-0 sm:rotate-90">
      <button
        onClick={() => changeLang("en")}
        className={`text-sm tracking-wide  cursor-pointer ${
          currentLang === "en" ? "font-bold" : "font-medium opacity-60"
        }`}
      >
        EN
      </button>

      <span className="rotate-180 opacity-60">|</span>

      <button
        onClick={() => changeLang("fa")}
        className={`text-md tracking-wide  cursor-pointer ${
          currentLang === "fa" ? "font-bold" : "font-medium opacity-60"
        }`}
      >
        FA
      </button>
    </div>
  );
}
