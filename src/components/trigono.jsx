import React from "react";
import trigonometryImage from "../assets/tri.png";
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
    transform: inView ? "translateY(0)" : "translateY(80px)", // Adjust this value for the image animation
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const TrigonometryFunction = () => {
  return (
    <div className="flex-grow bg-zinc-100 py-16 px-4" id="fungsiTrigono">
      {/* MATERI GRAFIK FUNGSI TRIGONOMETRI */}

      <div className="max-w-screen-xl mx-auto mt-8 md:mt-20 grid md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col justify-center">
          <TextAnimation>
            <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold py-2 mb-6">
              Fungsi Trigonometri
            </h1>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              Fungsi trigonometri adalah fungsi matematika yang melibatkan sudut
              dan panjang sisi dalam segitiga. Fungsi-fungsi trigonometri dasar
              melibatkan sin (sinus), cos (kosinus), dan tan (tangen). Mereka
              sering digunakan dalam matematika dan fisika untuk memodelkan
              pergerakan periodik dan hubungan antara sudut dan panjang sisi
              segitiga. Sinus dari suatu sudut dalam segitiga adalah
              perbandingan panjang sisi yang berlawanan dengan sudut tersebut
              dibagi panjang sisi miring segitiga. Kosinus adalah perbandingan
              panjang sisi sejajar dengan sudut tersebut dibagi panjang sisi
              miring. Tangen adalah perbandingan panjang sisi yang berlawanan
              dengan sudut dibagi panjang sisi sejajar. Fungsi-fungsi
              trigonometri memiliki banyak aplikasi dalam ilmu pengetahuan dan
              teknik, seperti dalam pemodelan gelombang, perhitungan sudut dan
              jarak, serta grafik fungsi periodik.
            </p>
          </TextAnimation>
        </div>

        <div className="flex justify-center">
          <ImageAnimation>
            <img
              src={trigonometryImage}
              alt="Fungsi Trigonometri"
              className="w-full md:w-auto my-4 rounded-xl shadow-xl order-2 md:order-1"
            />
          </ImageAnimation>
        </div>
      </div>
    </div>
  );
};

export default TrigonometryFunction;
