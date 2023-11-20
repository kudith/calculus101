import React from "react";
import logaritmaImg from "../assets/logaritma.png";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
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
    transform: inView ? "translateY(0)" : "translateX(200px)", // Adjust this value for the image animation
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const GrafikFungsiLogaritma = () => {
  return (
    <div
      className="flex-grow bg-zinc-100 py-16 mx-4 px-4 md:mx-8"
      id="fungsiLogaritma"
    >
      {/* MATERI GRAFIK FUNGSI LOGARITMA */}
      <div className="max-w-screen-xl mx-auto mt-8 md:mt-20 grid md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col justify-center text-sm md:text-base">
          <TextAnimation>
            <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold py-2 mb-6">
              Fungsi Logaritma
            </h1>
            <p className="mb-4 text-sm md:text-base leading-relaxed">
              Logaritma adalah kebalikan dari pemangkatan. Logaritma
              didefinisikan sebagai berikut: Misalkan 𝑎, 𝑏, 𝑐 ∈ 𝑅; 𝑎 &gt; 0; 𝑎 ≠
              1; dan 𝑐 &gt; 0, Maka berlaku jika 𝑎^𝑏 = 𝑐 maka log𝑎 𝑐 = 𝑏.
            </p>
            <p>Keterangan:</p>
            <ul className="list-disc pl-4">
              <li>a = Bilangan pokok (basis), syarat: 𝑎 &gt; 0 dan 𝑎 ≠ 1</li>
              <li>b = Hasil atau nilai logaritma</li>
              <li>c = Numerus, syarat: c &gt; 0</li>
            </ul>
            <p>Sifat-Sifat Logaritma:</p>
            <ul className="list-decimal">
              <li>
                Grafiknya berbentuk garis lengkungFungsi logaritma merupakan
                suatu fungsi kontinu karena nilainya tidak diskrit. Hal tersebut
                membuat fungsi logarima selalu memiliki nilai berapapun
                inputnya, sehingga membentuk grafik berupa garis melengkung.
              </li>
              <li>
                Nilai di sumbu x selalui positifDomain dan range grafik
                logaritma akan selalu berupa bilangan real. Dilansir dari Lumen
                Learning, domain dari fungsi logaritma hanya terdiri dari
                bilangan real positif. Artinya, domain grafik fungsi kuadrat
                memiliki jangkauan nol sampai dengan positif tak hingga.
              </li>
              <li>
                Memiliki asimtot tegakDilansir dari Mathematics LibreTexts,
                grafik fungsi logaritma memiliki asimtot tegak atau vertikal x =
                0. Hal tersebut dikarenakan grafiknya mendekati sumbu y tanpa
                pernah memotongnya. Sehingga, asimtot grafik fungsi kuadrat sama
                dengan sumbu y-nya.
              </li>
              <li>
                Arah grafik ditentukan oleh nilai aFungsi logaritma memiliki
                grafik yang khas. Logaritma basis lebih dari 1 memiliki grafik
                yang meningkat, sedangkan garitma basis antara 0 dan 1 memiliki
                grafik yang menurun Logaritma alami (basis e) memiliki grafik
                yang naik lebih cepat daripada logaritma berbasis 10.
              </li>
            </ul>
            <p>
              Seperti fungsi lainnya, fungsi logaritma memiliki bentuk umum yang
              lebih menunjukkan solusi sebagai berikut: f(x) = a log (x) a
              merupakan nilai basis logaritma. Dilansir dari Math is Fun, nilai
              a harus lebih besar dari 0 tetapi tidak boleh sama dengan 1. Hal
              tersebut dikarenakan logaritma 1 sama dengan logaritma 0 yang
              tidak terdefinisi.
            </p>
            <p>Contoh sifat-sifat logaritma:</p>
            <ul className="list-decimal pl-4">
              <li>𝑎 log 𝑎 = 1</li>
              <li>𝑎 log 1 = 0</li>
              <li>(𝑎^n) log 𝑏^m = (m/n) x (𝑎) log 𝑏</li>
              <li>(𝑎^m) log 𝑏^m = (𝑎) log 𝑏</li>
              <li>(𝑎) log 𝑏 = 1/(𝑏) log 𝑎</li>
              <li>(𝑎) log 𝑏 = (𝑘 log 𝑏)/(𝑘 log 𝑎)</li>
              <li>(𝑎^)(𝑎 log 𝑏) = 𝑏</li>
              <li>(𝑎 log 𝑏) + (𝑎 log 𝑐) = 𝑎 log (𝑏𝑐)</li>
            </ul>
          </TextAnimation>
        </div>
        <ImageAnimation>
          <img
            className="w-full md:w-auto my-4 rounded-xl shadow-xl"
            src={logaritmaImg}
            alt="Grafik Fungsi Logaritma"
          />
        </ImageAnimation>
      </div>
    </div>
  );
};

export default GrafikFungsiLogaritma;
