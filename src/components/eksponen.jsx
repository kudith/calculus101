import React from "react";
import eksponensialImg from "../assets/ekspo.png";

const GrafikFungsiEksponensial = () => {
  return (
    <div
      className="flex-grow bg-zinc-100 py-16 px-4 md:mx-8"
      id="fungsiEksponen"
    >
      {/* MATERI GRAFIK FUNGSI EKSPONENSIAL */}

      <div className="max-w-screen-xl mx-auto mt-8 md:mt-20 grid md:grid-cols-2 gap-20 items-center">
        <img
          className="w-full md:w-auto my-4 rounded-xl shadow-xl order-2 md:order-1"
          src={eksponensialImg}
          alt="Grafik Fungsi Eksponensial"
        />
        <div className="flex flex-col justify-center order-1 md:order-2">
          <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold py-2 mb-6">
            Fungsi Eksponensial
          </h1>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Fungsi eksponensial adalah fungsi non-aljabar atau transcendental
            yang tidak dapat direpresentasikan sebagai produk, jumlah, dan
            perbedaan variabel yang dipangkatkan ke bilangan bulat non-negatif.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Fungsi eksponensial merupakan fungsi berpangkat, yang pangkatnya
            memiliki variabel. Jika biasanya fungsi memiliki basis berupa
            variabel dan pangkat atau eksponen berupa konstanta, maka fungsi
            eksponensial adalah sebaliknya.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Fungsi eksponensial memiliki basis berupa konstanta dan pangkat atau
            eksponen berupa variabel atau mengandung variabel (kombinasi antara
            konstanta dan variabel).
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Fungsi eksponensial memiliki bentuk umum berupa: f(x) = a
            <sup>x</sup> Dengan, a: konstanta x: variabel Nilai harus lebih
            besar dari nol dan tidak boleh sama dengan satu. Hal tersebut
            dikarenakan basis fungsi eksponensial harus positif agar hasil yang
            didapatkan juga berupa bilangan real.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Jika a = 2, maka fungsi eksponensial adalah f(x) = 2x
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Fungsi eksponen dinyatakan dalam bentuk rumus sebagai berikut: a
            <sup>x</sup>, a ≠ 0
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrafikFungsiEksponensial;
