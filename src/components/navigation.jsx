import React, { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavigationCalc = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <div className="w-screen h-16 z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-8 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-xl text-primay font-serif italic font-bold animation-fade-in-up">
            <RouterLink
              to="/calculus101"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              |GraphMath
            </RouterLink>
          </h1>
          <ul className="hidden md:flex font-semibold mx-1 text-sm">
            <RouterLink
              to="/calculus101"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Home</li>
            </RouterLink>
            <Link
              to="fungsiLinear"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Linear</li>
            </Link>
            <Link
              to="fungsiKuadrat"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Kuadrat</li>
            </Link>
            <Link
              to="fungsiKubik"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Kubik</li>
            </Link>
            <Link
              to="fungsiEksponen"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Eksponensial</li>
            </Link>
            <Link
              to="fungsiLogaritma"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Logaritma</li>
            </Link>
            <Link
              to="fungsiTrigono"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Trigonometri</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex">
          <Link
            to="fungsiLinear"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="px-4 py-2 text-sm rounded-full">
              Let's Learn
            </button>
          </Link>
        </div>
        {/* Hamburger menu untuk mobile version */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars4Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>
      </div>
      <ul
        className={`md:hidden ${
          nav ? "block" : "hidden"
        } bg-zinc-200 w-full px-8`}
      >
        <RouterLink
          to="/calculus101"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Home</li>
        </RouterLink>
        <Link
          to="fungsiLinear"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Linear</li>
        </Link>
        <Link
          to="fungsiKuadrat"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Kuadrat</li>
        </Link>
        <Link
          to="fungsiKubik"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Kubik</li>
        </Link>
        <Link
          to="fungsiEksponen"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Eksponen</li>
        </Link>
        <Link
          to="fungsiLogaritma"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Logaritma</li>
        </Link>
        <Link
          to="fungsiTrigono"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">
            Fungsi Trigonometri
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationCalc;
