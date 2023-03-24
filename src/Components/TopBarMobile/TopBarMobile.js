import React from "react";
import { Line4 } from "../../styles/styles";
import logo1 from "../../assets/logo1.svg";
import logout1 from "../../assets/logout1.svg";
import { Line1 } from "../../styles/styles";

const TopBarMobile = () => {
  return (
    <div className="flex flex-col flex-1  bg-[#B20E11]">
      <div className=" flex bg-white w-5/12 mt-4 rounded-full p-1 self-end mr-4">
        <span className="text-[#B20E11] text-xs my-auto	">ESTER TERMENS</span>
        <Line1 />
        <img className="	my-auto" src={logout1} alt="" />
      </div>
      <div className="flex mx-auto py-5">
        <img className=" my-auto" src={logo1} alt="" width="155px" />
        <Line4 />
        <span className="text-white font-normal text-lg	 uppercase my-auto	">
          Formación
        </span>
      </div>
    </div>
  );
};

export default TopBarMobile;
