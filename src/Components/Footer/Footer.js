import React from "react";
import logo1 from "../../assets/logoRojo 1.svg";
import line2 from "../../assets/Line 2.png";

const Footer = () => {
  return (
    <div className="flex flex-col mt-64 mb-32">
      <div className="flex flex-col bg-[#F5F5F5] text-center text-lg py-10">
        <span className="font-medium	text-[#B20E11]">
          secretaria@elfarmaceutico.es
        </span>
        <span className="font-medium	mt-1">Tel. 932 090 255 </span>
        <span className="font-medium	mt-1">Horario de atención telefónica:</span>
        <span>De lunes a jueves: de 9.00 a 11.00 h y de 15.30 a 17.30 h</span>
        <span>Viernes: de 9.00 h a 11.00 h</span>
      </div>
      <div className="mx-auto mt-10">
        <img src={logo1} alt="" />
      </div>
      <img className="mt-8" src={line2} alt="" />
      <div className="flex flex-col mx-auto text-center mt-8 text-lg	">
        <span className="font-medium	">
          Copyright 2021 - © EDICIONES MAYO, S.A.
        </span>
        <span className="font-light	">
          Página web optimizada para navegadores Google Chrome, Mozilla Firefox,
          Safari, Android Browser & WebView (v5.0+) y Microsoft Edge.
        </span>
      </div>
    </div>
  );
};

export default Footer;
