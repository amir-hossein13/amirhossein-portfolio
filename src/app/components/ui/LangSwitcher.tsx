"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect current language based on URL
  const currentLang = pathname.startsWith("/fa") ? "fa" : "en";

  const changeLang = (lang:string) => {
    const segments = pathname.split("/");
    segments[1] = lang; // replace language folder in URL
    const newPath = segments.join("/");
    router.push(newPath);
  };

  // Set RTL or LTR automatically
  useEffect(() => {
    document.documentElement.dir = currentLang === "fa" ? "rtl" : "ltr";
  }, [currentLang]);

  return (
    <div className="flex flex-col items-center gap-2">
      {/* EN */}
      <button
        onClick={() => changeLang("en")}
        className={`text-sm tracking-wide rotate-90 cursor-pointer ${
          currentLang === "en" ? "font-bold" : "font-medium opacity-60"
        }`}
      >
        EN
      </button>

      {/* Divider */}
      <span className="rotate-90 opacity-60">|</span>

      {/* FA */}
      <button
        onClick={() => changeLang("fa")}
        className={`text-sm tracking-wide rotate-90 cursor-pointer ${
          currentLang === "fa" ? "font-bold" : "font-medium opacity-60"
        }`}
      >
        FA
      </button>
    </div>
  );
}
