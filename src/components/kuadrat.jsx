import React from "react";
import quadraticImg from "../assets/kuadrat.png";

const GrafikFungsiKuadrat = () => {
  return (
    <div
      id="fungsiKuadrat"
      className="flex-grow bg-zinc-100 py-36 px-4 w-full h-full"
    >
      {/* MATERI GRAFIK FUNGSI KUADRAT */}

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-20 md:mx-8">
        <img
          className="w-full md:w-auto my-4 rounded-xl shadow-xl order-2 md:order-1"
          src={quadraticImg}
          alt="Grafik Fungsi Kuadrat"
        />
        <div className="flex flex-col justify-center order-1 md:order-2">
          <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold py-2 my-6">
            Grafik Fungsi Kuadrat
          </h1>
          <p className="mb-4 text-sm md:text-base">
            Fungsi kuadrat adalah fungsi yang disusun oleh persamaan kuadrat
            berbentuk umum f(x) = ax² + bx + c, dengan a ≠ 0. Grafik fungsi
            kuadrat berbentuk non-linear dalam koordinat kartesius yaitu berupa
            parabola. Bentuk umum fungsi kuadrat: f(x) = ax² + bx + c atau dalam
            bentuk koordinat kartesius: y = ax² + bx + c atau dalam bentuk
            relasi fungsi: f : x → ax² + bx + c. Dengan a sebagai koefisien
            variabel x² (a ≠ 0), nilai a menentukan jenis bentuk grafik
            non-linear yang dibentuk:
          </p>
          <ul className="list-disc ml-6 text-sm md:text-base">
            <li>a &lt; 0 menghasilkan parabola membuka ke atas</li>
            <li>a &gt; 0 menghasilkan parabola membuka ke bawah.</li>
          </ul>
          <p className="mb-4 text-sm md:text-base">
            Koefisien b menyatakan koefisien x dari fungsi kuadrat, dan c
            menyatakan konstanta fungsi kuadrat. Nilai koefisien c menentukan
            titik potong grafik terhadap sumbu y dari fungsi kuadrat dalam
            koordinat kartesius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrafikFungsiKuadrat;
