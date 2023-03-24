import React, { useEffect, useState } from "react";
import { IMAGES_BANNER } from "../../Routes/routes";
import useBanners from "../../Hooks/useBanners";
import arrow from "../../assets/arrow.png";

const Banner = () => {
  const { getBanner } = useBanners();

  const [banner, setBanner] = useState({});

  useEffect(() => {
    const fetchBanners = async () => {
      const resGetBanner = await getBanner();
      setBanner(resGetBanner);
    };
    fetchBanners();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="relative">
      <img className="" src={IMAGES_BANNER + banner.url} alt="" />
      <div>
        <img
          className="absolute inset-y-0 right-44 my-auto"
          src={IMAGES_BANNER + banner.title}
          alt=""
        />
        <img
          className="absolute inset-y-0 right-10 my-auto"
          src={arrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
