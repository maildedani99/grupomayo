import React from "react";
import PropTypes from "prop-types";
import { IMAGES_SUBBANNER } from "../../Routes/routes";

const SubbannerCardMobile = ({ subbanner }) => {
  return (
    <div className="flex flex-col  p-2 justify-items-center	mt-10 px-8 ">
      <div className="min-h-[80px]">
        <img
          className="mx-auto"
          src={IMAGES_SUBBANNER + subbanner.icon}
          alt="icon"
          width="80px"
        />
      </div>
      <div className="font-medium text-lg text-[#5C5C5C] mx-auto text-center leading-5	mt-4 min-h-[50px]">
        <span>{subbanner.title}</span>
      </div>
      <div className="flex flex-col mx-auto mt-5 text-sm font-medium text-primary ">
        <span className="mx-auto">Periodo lectivo:</span>
        <span className="mx-auto"> {subbanner.period} </span>
        <input
          className="uppercase w-[132px] text-center rounded-full mt-4 bg-[#909DBC] text-white text-xs font-light p-1 "
          type="text"
          value="Acceder"
          readOnly
        />
      </div>
    </div>
  );
};

SubbannerCardMobile.propTypes = {
  subbanner: PropTypes.object,
};

export default SubbannerCardMobile;
