import React from "react";
import NavigationCalc from "./navigation";
import GrafikFungsiLinear from "./linear";
import GrafikFungsiKuadrat from "./kuadrat";
import Footer from "./footer";
import GrafikFungsiKubik from "./kubik";
import GrafikFungsiEksponensial from "./eksponen";
import GrafikFungsiLogaritma from "./logaritma";
import GrafikFungsiTrigono from "./trigono";
import { ScrollRestoration } from "react-router-dom";
const MateriKalkulus = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <NavigationCalc />
      <GrafikFungsiLinear />
      <GrafikFungsiKuadrat />
      <GrafikFungsiKubik />
      <GrafikFungsiEksponensial />
      <GrafikFungsiLogaritma />
      <GrafikFungsiTrigono />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MateriKalkulus;
