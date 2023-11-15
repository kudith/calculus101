import React from "react";
import aboutImg from "../assets/Mathematics-amico.png";
import abouImg from "../assets/bg-hero.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-white py-16 px-4 bg-cover bg-no-repeat mt-[35rem] md:mt-20"
      style={{ backgroundImage: `url(${abouImg})` }}
    >
      <div className="max-w-screen-xl mt-10 sm:mt-1 mx-auto grid md:grid-cols-2 gap-20">
        <img
          className="w-full md:w-auto my-4"
          src={aboutImg}
          alt="About Mathematics"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] text-xl font-bold mb-2 md:text-2xl">
            About Our Website
          </p>
          <h1 className="text-3xl md:text-4xl sm:text-3xl font-bold py-2">
            Explore the World of Mathematics with Ease
          </h1>
          <p className="mb-4 md:text-base text-sm">
            Website ini merupakan proyek untuk tugas mata kuliah Kalkulus 1.
            Meskipun masih jauh dari kesempurnaan, kami berusaha menyajikan
            informasi matematika dengan cara yang mudah dipahami. Kami memahami
            bahwa matematika bisa menjadi tantangan, dan tujuan kami adalah
            membuatnya lebih mudah dan menyenangkan untuk dieksplorasi.
          </p>
          <p className="md:text-base text-sm">
            Kami menggunakan React dan Tailwind CSS untuk membangun website ini.
            Kami berharap bahwa website ini dapat membantu seseorang dalam
            memahami konsep-konsep matematika dengan lebih baik khususnya grafik
            fungsi. Meskipun Web ini masih banyak kekurangan dalam menggambarkan
            grafik fungsi tetapi web ini sudah bisa untuk memvisualkan sebuah
            fungsi matematika.
          </p>
          <p className="text-base font-bold my-4">
            Terima kasih telah mengunjungi website kami{" "}
            <span className="text-xl"> 😁</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
