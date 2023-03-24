import React from "react";
import logo1 from "../../assets/logo1.svg";
import { Line3 } from "../../styles/styles";

const TopBar = () => {
  return (
    <div className="bg-[#B20E11]">
      <div className="flex  p-4">
        <img className=" my-auto" src={logo1} alt="" width="324px" />
        <Line3 />
        <span className="text-white font-normal text-[26px] uppercase my-auto	">
          Formación
        </span>
      </div>
    </div>
  );
};

export default TopBar;
