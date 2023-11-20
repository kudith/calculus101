import React, { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Komponen NavigationCalc untuk navigasi halaman Materi Kalkulus
const NavigationCalc = () => {
  // State untuk menyimpan status tampilan menu mobile.
  const [nav, setNav] = useState(false);

  // Fungsi untuk mengubah status menu mobile.
  const handleClick = () => setNav(!nav);

  // Fungsi untuk menutup menu mobile.
  const closeMenu = () => setNav(false);

  return (
    <div className="w-screen h-16 z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-8 flex justify-between items-center w-full h-full">
        {/* Bagian Logo dan Navigasi */}
        <div className="flex items-center">
          <h1 className="text-xl text-primay font-serif italic font-bold animation-fade-in-up">
            <RouterLink
              to="/calculus101"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              |GraphMath
            </RouterLink>
          </h1>
          {/* Navigasi Desktop */}
          <ul className="hidden md:flex font-semibold mx-1 text-sm">
            <RouterLink
              to="/calculus101"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li>Beranda</li>
            </RouterLink>
            <Link
              to="fungsiLinear"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Linear</li>
            </Link>
            <Link
              to="fungsiKuadrat"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Kuadrat</li>
            </Link>
            <Link
              to="fungsiKubik"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Kubik</li>
            </Link>
            <Link
              to="fungsiEksponen"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Eksponen</li>
            </Link>
            <Link
              to="fungsiLogaritma"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Logaritma</li>
            </Link>
            <Link
              to="fungsiTrigono"
              smooth="true"
              duration={500}
              className="cursor-pointer"
            >
              <li>Fungsi Trigonometri</li>
            </Link>
          </ul>
        </div>

        {/* Tombol Hamburger untuk versi mobile */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars4Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>
      </div>

      {/* Menu Mobile */}
      <ul
        className={`md:hidden ${
          nav ? "block" : "hidden"
        } bg-zinc-200 w-full px-8`}
      >
        <RouterLink
          to="/calculus101"
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Beranda</li>
        </RouterLink>
        <Link
          to="fungsiLinear"
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Linear</li>
        </Link>
        <Link
          to="fungsiKuadrat"
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Kuadrat</li>
        </Link>
        <Link
          to="fungsiKubik"
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Kubik</li>
        </Link>
        <Link
          to="fungsiEksponen"
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Eksponen</li>
        </Link>
        <RouterLink
          install
          react-spring
          to="fungsiLogaritma"
          smooth="true"
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <li className="border-b-2 border-zinc-300 py-2">Fungsi Logaritma</li>
        </RouterLink>
        <Link
          to="fungsiTrigono"
          smooth="true"
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
