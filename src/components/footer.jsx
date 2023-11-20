import React from "react";
import { FaGithubSquare, FaInstagram, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

// Komponen untuk bagian footer pada halaman web
const Footer = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 mt-12">
      {/* Container untuk menampilkan konten dalam grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Bagian Kiri */}
        <div className="col-span-1 md:col-span-2">
          {/* Judul */}
          <h1 className="text-3xl font-bold text-primay font-serif italic mb-4 animation-fade-in-up">
            |GraphMath
          </h1>

          {/* Deskripsi */}
          <p className="mb-6 md:text-sm text-xs">
            Temukan solusi matematika di GraphMath. Kami menyajikan solusi
            kalkulus khususnya grafik fungsi dengan pendekatan yang ramah dan
            menarik. Soon, we will develop this website even better for calculus
            solutions.
          </p>

          {/* Ikoni Sosial Media dan Teknologi */}
          <div className="flex space-x-4">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact size={40} />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTailwindcss size={40} />
            </a>
            <a
              href="https://www.instagram.com/g.adty_/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://github.com/kudith/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={40} />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoJavascript size={40} />
            </a>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-16 md:space-y-0">
          {/* Daftar Konten */}
          <div>
            <h6 className="font-medium text-gray-400 mb-2">Content</h6>
            <ul className="text-xs underline">
              <li className="py-1">
                <Link to="/" smooth="true" duration={500}>
                  Beranda
                </Link>
              </li>
              <li className="py-1">
                <Link to="/" smooth="true" duration={500}>
                  Tentang
                </Link>
              </li>
              <li className="py-1">
                <Link to="/" smooth="true" duration={500}>
                  Kalkulator
                </Link>
              </li>
              <li className="py-1">
                <Link to="/MateriKalkulus" smooth="true" duration={500}>
                  Materi Kalkulus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
