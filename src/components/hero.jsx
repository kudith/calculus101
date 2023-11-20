import React from "react";
import bgImg from "../assets/Mathematics-bro(2).svg";
import { Link } from "react-scroll";
import Typed from "react-typed";
import {
  CalculatorIcon,
  VariableIcon,
  PaperAirplaneIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(60px)",
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const ImageAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateX(80px)",
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

// Komponen Hero untuk halaman utama.
const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#F1F1F1]">
      {/* Bagian Header */}
      <div className="grid sm:grid-cols-1 md:gap-20 mt-[30rem]  md:grid-cols-2 md:mt-20 max-w-screen-xl mx-auto">
        {/* Bagian Teks dan Tombol */}
        <TextAnimation>
          <div className="flex flex-col justify-center  w-full px-4 sm:px-6 md:px-8 py-8">
            {/* Judul dan Efek Typed */}
            <p className="text-xl font-bold">
              Selamat datang di
              <span className="text-2xl font-serif text-primay italic animation-fade-in-up">
                {" "}
                |Graph
              </span>
              <Typed
                className="md:text-2xl font-serif italic text-primay text-xl font-bold md:pl-1 pl-1"
                strings={["Math"]}
                typeSpeed={180}
                backSpeed={190}
                loop
              />
            </p>
            {/* Subjudul */}
            <h1 className="py-3 text-2xl sm:text-3xl md:text-4xl font-bold">
              Explore Math Functions & Graph
            </h1>
            {/* Deskripsi dan Daftar Jenis Fungsi */}
            <p className="text-base md:text-2xl my-2 text-primay font-bold">
              Solusi untuk Grafik Fungsi
              <Typed
                className="md:text-2xl sm:text-2xl text-base font-bold md:pl-2 pl-2"
                strings={[
                  "Linear",
                  "Kuadrat",
                  "Kubik",
                  "Eksponensial",
                  "Logaritma",
                  "Trigonometri",
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </p>
            {/* Deskripsi tambahan */}
            <p className="text-sm text-zinc-600 mb-6 md:mb-2">
              Matematika menjadi lebih mudah. Kalkulator Fungsi Matematika kami
              membantu menggambar grafik fungsi dasar seperti linear, kuadrat
              dan lainnya. Praktis dan mudah dipahami, membuat matematika jadi
              menyenangkan!
            </p>
            {/* Tombol "Ayo Mulai" */}
            <Link
              to="calculator"
              spy={true}
              smooth="true"
              offset={-50}
              duration={500}
              className="py-4 px-6 sm:w-full sm:max-w-[60%] md:w-[50%] lg:w-[40%] cursor-pointer"
            >
              <button className="py-3 px-6 sm:py-2 sm:px-4 w-full md:my-8 md:animate-bounce">
                Coba sekarang!😀
              </button>
            </Link>
          </div>
        </TextAnimation>
        {/* Bagian Gambar Latar Belakang */}
        <ImageAnimation>
          <div className="md:ml-0 w-full">
            <img src={bgImg} alt="" className="w-[100%]" />
          </div>
        </ImageAnimation>
      </div>

      {/* Bagian Informasi Konten */}
      <div className="md:absolute flex flex-col py-4 md:min-w-[760px] bottom-[0.5%] md:bottom-[-20%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100 border border-slate-200 rounded-xl text-center shadow-xl mt-14">
        <p className="font-semibold text-slate-700 pb-4">Calculus Content</p>
        {/* Daftar Ikon dan Teks Fungsi */}
        <div className="flex justify-center flex-wrap px-4 text-sm">
          {[
            {
              icon: <CalculatorIcon className="h-6 mx-2 text-primay" />,
              text: " Fungsi Linear",
            },
            {
              icon: <VariableIcon className="h-6 mx-2 text-primay" />,
              text: "Fungsi Kuadrat",
            },
            {
              icon: <PaperAirplaneIcon className="h-6 mx-2 text-primay" />,
              text: "Fungsi Kubik",
            },
            {
              icon: <SquaresPlusIcon className="h-6 mx-2 text-primay" />,
              text: "Fungsi Eksponensial",
            },
            {
              icon: <SquaresPlusIcon className="h-6 mx-2 text-primay" />,
              text: "Fungsi Logaritma",
            },
            {
              icon: <SquaresPlusIcon className="h-6 mx-2 text-primay" />,
              text: "Fungsi Trigonometri",
            },
          ].map((item, index) => (
            <p key={index} className="flex px-4 py-2 text-slate-500">
              {item.icon} {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
