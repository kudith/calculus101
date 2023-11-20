import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import linear from "../assets/linear.png";

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

const ImageAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateX(80px)", // Adjust this value for the image animation
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const GrafikFungsiLinear = () => {
  return (
    <div
      id="fungsiLinear"
      className="flex-grow bg-zinc-100 py-16 px-4 md:mx-8"
      style={{}}
    >
      {/* MATERI GRAFIK FUNGSI LINEAR */}

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-20">
        <div className="flex flex-col justify-center">
          <TextAnimation>
            <p className="text-primay text-2xl md:text-5xl text-center font-bold mb-2">
              Kalkulus 1
            </p>
            <h1 className="text-3xl md:text-5xl sm:text-3xl font-bold py-2 my-6">
              Grafik Fungsi Linear
            </h1>
            <p className="mb-4 text-sm md:text-base">
              Fungsi linear (fungsi polinomial) merupakan sebuah fungsi y = f(x)
              dengan F(x) = ax + b (a, b ∈ R dan a ≠ 0) untuk seluruh x dalam
              daerah asalnya. Bentuk Umum: F(x) = ax + b → y = ax + b Dimana: a
              = gradien/slope/koefisien arah/kemiringan b = intercept (titik
              potong fungsi sumbu y) Nah, fungsi linear ini tidak akan jauh dari
              yang namanya penggambaran grafik, sehingga ketika harus
              melakukannya harus mencermati beberapa langkah berikut ini.
            </p>
            <ul className="list-disc ml-6 text-sm md:text-base">
              <li>
                Menentukan titik potong dengan sumbu x, maka y = 0, didapatkan
                dari koordinat A (x1, 0)
              </li>
              <li>
                Menentukan titik potong dengan sumbu y, maka x = 0, didapatkan
                dari koordinat B (0, y1)
              </li>
              <li>
                Menghubungkan dua titik A dan B, sehingga akan membentuk garis
                lurus persamaan linear yang kemudian ditulis dengan y = ax + b.
              </li>
              <li>
                Apabila b bernilai positif, maka fungsi linear akan dilukis
                garis dari arah kiri bawah ke kanan atas.
              </li>
              <li>
                Apabila b bernilai negatif, maka fungsi linear akan dilukis
                garis dari arah kiri atas ke kanan bawah.
              </li>
              <li>
                Apabila b bernilai 0, maka fungsi linear akan dilukis garis yang
                sejajar dengan sumbu datar X.
              </li>
            </ul>
          </TextAnimation>
        </div>
        <ImageAnimation>
          <img
            className="w-full md:w-auto my-4 rounded-xl shadow-xl"
            src={linear}
            alt="grafik_fungsi_lineaer"
          />
        </ImageAnimation>
      </div>
    </div>
  );
};

export default GrafikFungsiLinear;
