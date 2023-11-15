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

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#F1F1F1]">
      <div className="grid sm:grid-cols-1 gap-20  md:grid-cols-2 mt-[45rem] md:mt-20 max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-4 sm:px-6 md:px-8 py-8">
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
          <h1 className="py-3 text-2xl sm:text-3xl md:text-4xl font-bold">
            Explore Math Functions & Graph
          </h1>
          <p className="text-lg md:text-2xl my-4 text-primay font-bold">
            Solusi untuk Grafik Fungsi
            <Typed
              className="md:text-2xl sm:text-2xl text-lg font-bold md:pl-2 pl-2"
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
          <p className="text-sm text-zinc-600">
            Matematika menjadi lebih mudah. Kalkulator Fungsi Matematika kami
            adalah pintu gerbang Anda untuk menyelesaikan persamaan kuadrat,
            linear, kubik, logaritmik, dan trigonometri dengan lancar. Web ini
            dibangun untuk menemukan solusi dalam menggambar grafik fungsi.
          </p>
          <Link
            to="calculator"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="py-4 px-6 sm:w-full sm:max-w-[60%] md:w-[50%] lg:w-[40%] cursor-pointer"
          >
            <button className="py-3 px-6 sm:py-2 sm:px-4 w-full md:my-8 my-2">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:ml-0 md:mt-4 w-full animation-fade-in-up">
          <img src={bgImg} alt="" className="w-[90%]" />
        </div>
      </div>

      <div className="md:absolute flex flex-col py-4 md:min-w-[760px] bottom-[0.5%] md:bottom-[-20%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100 border border-slate-200 rounded-xl text-center shadow-xl mt-14">
        <p className="font-semibold text-slate-700 pb-4">Calculus Content</p>
        <div className="flex justify-center flex-wrap px-4 text-sm">
          {[
            {
              icon: <CalculatorIcon className="h-6 mx-2 text-primay" />,
              text: "Linear function",
            },
            {
              icon: <VariableIcon className="h-6 mx-2 text-primay" />,
              text: "Quadratic function",
            },
            {
              icon: <PaperAirplaneIcon className="h-6 mx-2 text-primay" />,
              text: "Cubic function",
            },
            {
              icon: <SquaresPlusIcon className="h-6 mx-2 text-primay" />,
              text: "Exponential function",
            },
            {
              icon: <SquaresPlusIcon className="h-6 mx-2 text-primay" />,
              text: "Logarithmic function",
            },
            {
              icon: <SquaresPlusIcon className="h-6 mx-2 text-primay" />,
              text: "Trigonometric function",
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
