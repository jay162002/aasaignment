import React, { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="#" className="flex items-center gap-1">
        <img src={logo} alt="Alt Tag" className="w-16 h-[48px]" />
        <span className="text-white text-xl">Assingment Partner</span>
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((n, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${n.id}`}>{n.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((n, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${n.id}`}>{n.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
