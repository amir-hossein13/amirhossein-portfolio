"use client";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("home");

  const links = ["home", "about", "projects", "contact", "blog"];

  return (
    <header className="mt-5">
      <ul className="flex flex-row justify-between">
        {links.map((item) => (
          <li
            key={item}
            className={`sm:text-xl cursor-pointer transition-all 
              ${
                active === item
                  ? "text-primary-black font-semibold"
                  : "text-primary-gray"
              }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="border-b mt-8 border-[#828282]" />
    </header>
  );
}

export default Header;
