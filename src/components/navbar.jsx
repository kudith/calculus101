import React, { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const closeMenu = () => setNav(false);

  return (
    <div className="w-screen h-16 z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-6 flex justify-between items-center w-full h-full">
        <div className="flex items-center px-4">
          <h1 className=" text-lg text-primay font-serif font-bold  animation-fade-in-up">
            <Link
              to="home-section"
              spy={true}
              smooth="true"
              duration={500}
              className="cursor-pointer italic"
            >
              |GraphMath
            </Link>
          </h1>
          <ul className="hidden md:flex text-sm font-semibold ml-4">
            <Link
              to="home-section"
              spy={true}
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li className="ml-4">Home</li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li className="ml-4">About</li>
            </Link>
            <Link
              to="calculator"
              spy={true}
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li className="ml-4">Calculator</li>
            </Link>
            <RouterLink
              to="/calculus101/MateriKalkulus"
              className="cursor-pointer"
            >
              <li className="ml-4">Calculus</li>
            </RouterLink>
            <Link
              to="contact"
              spy={true}
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li className="ml-4">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <Link
            to="calculator"
            spy={true}
            smooth="true"
            duration={500}
            className="cursor-pointer"
          >
            <button className="py-2 px-4 text-sm   rounded-full">
              Let's Try!
            </button>
          </Link>
        </div>

        {/* Hamburger menu untuk mobile version */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars4Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>
      </div>
      <ul
        className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-4 md:px-8"}
      >
        <Link
          to="home-section"
          spy={true}
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">Home</li>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">About</li>
        </Link>
        <Link
          to="calculator"
          spy={true}
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">Calculator</li>
        </Link>
        <RouterLink to="/calculus101/MateriKalkulus" onClick={closeMenu}>
          <li className="border-b-2 border-zinc-300 w-full py-2">Calculus</li>
        </RouterLink>
        <Link
          to="contact"
          spy={true}
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
