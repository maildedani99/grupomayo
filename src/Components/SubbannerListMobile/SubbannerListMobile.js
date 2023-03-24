import React, { useEffect, useState } from "react";
import useBanners from "../../Hooks/useBanners";
import line5 from "../../assets/Line 5.png";
import SubbannerCardMobile from "../SubbannerCardMobile/SubbannerCardMobile";

const SubbannerListMobile = () => {
  const { getSubbanners } = useBanners();

  const [subbanners, setSubbanners] = useState([]);

  useEffect(() => {
    const fetchSubbanners = async () => {
      const resGetSubbanner = await getSubbanners();
      setSubbanners(resGetSubbanner);
    };
    fetchSubbanners();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col">
      {subbanners &&
        subbanners.map((subbanner) => (
          <div className=" mx-auto " key={subbanner.id}>
            <SubbannerCardMobile subbanner={subbanner} />
            <img className="mx-auto mt-8" src={line5} alt="" />
          </div>
        ))}
    </div>
  );
};


export default SubbannerListMobile;
