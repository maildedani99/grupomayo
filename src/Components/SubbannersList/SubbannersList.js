import React, { useEffect, useState } from "react";
import SubbannerCard from "../SubbannerCard/SubbannerCard";
import useBanners from "../../Hooks/useBanners";
import "./subbannersList.css";

const SubbannersList = () => {
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
    <div className="flex bg-[#F5F5F5] h-[419px] card-container shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      {subbanners &&
        subbanners.map((subbanner) => (
          <div className="card " key={subbanner.id}>
            <SubbannerCard subbanner={subbanner} />
          </div>
        ))}
    </div>
  );
};

export default SubbannersList;
