import React, { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Komponen Navbar untuk navigasi halaman.
const Navbar = () => {
  // State untuk menyimpan status tampilan menu mobile.
  const [nav, setNav] = useState(false);

  // Fungsi untuk mengubah status menu mobile.
  const handleClick = () => setNav(!nav);

  // Fungsi untuk menutup menu mobile.
  const closeMenu = () => setNav(false);

  return (
    <div className="w-screen h-16 z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-6 flex justify-between items-center w-full h-full">
        {/* Bagian Logo dan Navigasi */}
        <div className="flex items-center px-4">
          <h1 className="text-lg text-primay font-serif font-bold animation-fade-in-up">
            <Link
              to="home-section"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer italic"
            >
              |GraphMath
            </Link>
          </h1>
          {/* Navigasi Desktop */}
          <div className="">
            <ul className="hidden md:flex text-sm font-semibold ml-4 mx-auto">
              <Link
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <li className="ml-4">Beranda</li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <li className="ml-4">Tentang</li>
              </Link>
              <Link
                to="calculator"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <li className="ml-4">Kalkulator</li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                className="cursor-pointer"
              >
                <li className="ml-4">Kontak</li>
              </Link>
              <RouterLink to="/MateriKalkulus" className="cursor-pointer">
                <li className="ml-4">Materi Kalkulus</li>
              </RouterLink>
            </ul>
          </div>
        </div>

        {/* Tombol Hamburger untuk versi mobile */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars4Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>
      </div>

      {/* Menu Mobile */}
      <ul
        className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-4 md:px-8"}
      >
        <Link
          to="home-section"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">Beranda</li>
        </Link>
        <Link
          to="about"
          spy={true}
          offset={470}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">Tentang</li>
        </Link>
        <Link
          to="calculator"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">Kalkulator</li>
        </Link>
        <RouterLink to="/MateriKalkulus" onClick={closeMenu}>
          <li className="border-b-2 border-zinc-300 w-full py-2">
            Materi Kalkulus
          </li>
        </RouterLink>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 w-full py-2">Kontak</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
