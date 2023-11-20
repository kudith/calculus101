import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import quadraticImg from "../assets/kuadrat.png";

const TextAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(60px)",
    config: config.molasses,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const ImageAnimation = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateX(-80px)",
    config: config.slow,
  });

  return (
    <animated.img
      ref={ref}
      className="w-full md:w-auto my-4 rounded-xl shadow-xl"
      src={src}
      alt={alt}
      style={props}
    />
  );
};

const GrafikFungsiKuadrat = () => {
  return (
    <div
      id="fungsiKuadrat"
      className="flex-grow bg-zinc-100 py-16 px-4 md:px-8"
    >
      {/* MATERI GRAFIK FUNGSI KUADRAT */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-20">
        <div className="flex flex-col justify-center md:order-last">
          <TextAnimation>
            <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold py-2 my-6">
              Grafik Fungsi Kuadrat
            </h1>
            <p className="mb-4 text-base md:text-lg">
              Fungsi kuadrat adalah fungsi yang disusun oleh persamaan kuadrat
              berbentuk umum f(x) = ax² + bx + c, dengan a ≠ 0. Grafik fungsi
              kuadrat berbentuk non-linear dalam koordinat kartesius yaitu
              berupa parabola. Bentuk umum fungsi kuadrat: f(x) = ax² + bx + c
              atau dalam bentuk koordinat kartesius: y = ax² + bx + c atau dalam
              bentuk relasi fungsi: f : x → ax² + bx + c. Dengan a sebagai
              koefisien variabel x² (a ≠ 0), nilai a menentukan jenis bentuk
              grafik non-linear yang dibentuk:
            </p>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li className="mb-2">
                a &lt; 0 menghasilkan parabola membuka ke atas
              </li>
              <li className="mb-2">
                a &gt; 0 menghasilkan parabola membuka ke bawah.
              </li>
            </ul>
            <p className="mb-4 text-base md:text-lg">
              Koefisien b menyatakan koefisien x dari fungsi kuadrat, dan c
              menyatakan konstanta fungsi kuadrat. Nilai koefisien c menentukan
              titik potong grafik terhadap sumbu y dari fungsi kuadrat dalam
              koordinat kartesius.
            </p>
          </TextAnimation>
        </div>
        <ImageAnimation
          src={quadraticImg}
          alt="Grafik Fungsi Kuadrat"
          className="md:order-first"
        />
      </div>
    </div>
  );
};

export default GrafikFungsiKuadrat;
