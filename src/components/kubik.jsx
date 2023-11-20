import React from "react";
import kubikImg from "../assets/kubik.svg";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

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
    transform: inView ? "translateY(0)" : "translateX(80px)",
    config: config.molasses,
  });

  return (
    <animated.img
      ref={ref}
      className="w-full md:w-auto my-4 mx-auto rounded-xl shadow-xl"
      src={src}
      alt={alt}
      style={props}
    />
  );
};

const GrafikFungsiKubik = () => {
  return (
    <div className="flex-grow bg-zinc-100 py-16 px-4 md:mx-8" id="fungsiKubik">
      {/* MATERI GRAFIK FUNGSI KUBIK */}

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-20 md:gap-16 mt-8 md:mt-20">
        <div className="flex flex-col justify-center">
          <TextAnimation>
            <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold py-2 my-6">
              Grafik Fungsi Kubik
            </h1>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              Fungsi kubik adalah fungsi bentuk f(x) = ax³ + bx² + cx + d, yaitu
              fungsi polinomial derajat tiga. Dalam banyak teks, koefisien a, b,
              c, dan d dianggap sebagai bilangan real, dan fungsi tersebut
              dianggap sebagai fungsi nyata yang memetakan bilangan real ke
              bilangan real atau sebagai fungsi kompleks yang memetakan bilangan
              kompleks ke bilangan kompleks. Dalam kasus lain, koefisiennya bisa
              berupa bilangan kompleks, dan fungsinya adalah fungsi kompleks
              yang memiliki himpunan bilangan kompleks sebagai kodomainnya,
              meskipun domainnya dibatasi pada bilangan real.
            </p>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              Pengaturan f(x) = 0 menghasilkan persamaan kubik dalam bentuk
              <br />
              ax³ + bx² + cx + d = 0, yang solusinya disebut akar fungsi.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Fungsi kubik dengan koefisien real mempunyai satu atau tiga akar
              real (yang mungkin tidak berbeda); semua polinomial berderajat
              ganjil dengan koefisien real mempunyai paling sedikit satu akar
              real.
            </p>
          </TextAnimation>
        </div>

        <ImageAnimation
          className="w-full md:w-auto my-4 mx-auto rounded-xl shadow-xl"
          src={kubikImg}
          alt="Grafik Fungsi Kubik"
        />
      </div>
    </div>
  );
};

export default GrafikFungsiKubik;
