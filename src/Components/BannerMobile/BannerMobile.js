import React, { useEffect, useState } from "react";
import useBanners from "../../Hooks/useBanners";
import { IMAGES_BANNER } from "../../Routes/routes";

const BannerMobile = () => {
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
    <div className="relative overflow-hidden 	">
      <img className="min-w-[992px] " src={IMAGES_BANNER + banner.url} alt="" />
      <div>
        <img
          className="absolute inset-y-0  my-auto"
          src={IMAGES_BANNER + banner.title}
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerMobile;
