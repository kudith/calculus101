import React from "react";
import logaritmaImg from "../assets/logaritma.png";

const GrafikFungsiLogaritma = () => {
  return (
    <div
      className="flex-grow bg-zinc-100 py-16 px-4 md:mx-8"
      id="fungsiLogaritma"
    >
      {/* MATERI GRAFIK FUNGSI LOGARITMA */}
      <div className="max-w-screen-xl mx-auto mt-8 md:mt-20 grid md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col justify-center text-sm md:text-base">
          <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold py-2 mb-6">
            Fungsi Logaritma
          </h1>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Logaritma adalah kebalikan dari pemangkatan. Logaritma didefinisikan
            sebagai berikut: Misalkan 𝑎, 𝑏, 𝑐 ∈ 𝑅; 𝑎 &gt; 0; 𝑎 ≠ 1; dan 𝑐 &gt;
            0, Maka berlaku jika 𝑎^𝑏 = 𝑐 maka log𝑎 𝑐 = 𝑏.
          </p>
          <p>Sifat-sifat Logaritma:</p>
          <ul className="list-decimal pl-4">
            <li>a = Bilangan pokok (basis), syarat: 𝑎 &gt; 0 dan 𝑎 ≠ 1</li>
            <li>b = Hasil atau nilai logaritma</li>
            <li>c = Numerus, syarat: c &gt; 0</li>
          </ul>
          <p>
            Seperti fungsi lainnya, fungsi logaritma memiliki bentuk umum yang
            lebih menunjukkan solusi sebagai berikut: f(x) = a log (x) a
            merupakan nilai basis logaritma. Dilansir dari Math is Fun, nilai a
            harus lebih besar dari 0 tetapi tidak boleh sama dengan 1. Hal
            tersebut dikarenakan logaritma 1 sama dengan logaritma 0 yang tidak
            terdefinisi.
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
        </div>
        <img
          className="w-full md:w-auto my-4 rounded-xl shadow-xl"
          src={logaritmaImg}
          alt="Grafik Fungsi Logaritma"
        />
      </div>
    </div>
  );
};

export default GrafikFungsiLogaritma;
