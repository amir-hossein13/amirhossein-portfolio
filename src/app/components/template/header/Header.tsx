"use client";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Container from "../../ui/Container";

function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const t = useTranslations("header");
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <header className="mt-5 sticky top-0 z-50 bg-white/70 backdrop-blur-sm ">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Portfolio</h1>

          <button className="text-3xl sm:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>

          <ul className="hidden sm:flex flex-row gap-8">
            {links.map((item) => (
              <li
                key={item}
                className={`sm:text-xl cursor-pointer transition-all ${
                  active === item
                    ? "text-primary-black font-semibold"
                    : "text-primary-gray"
                }`}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                  document.getElementById(item)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {t(`nav.${item}`)}
              </li>
            ))}
          </ul>
        </div>

        <ul
          className={`sm:hidden flex flex-col gap-5 text-lg mt-5 overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {links.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                active === item
                  ? "text-primary-black font-semibold"
                  : "text-primary-gray"
              }`}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="border-b mt-8 border-[#828282]" />
      </Container>
    </header>
  );
}

export default Header;
