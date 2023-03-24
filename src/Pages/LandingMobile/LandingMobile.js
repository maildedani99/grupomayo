import React from "react";
import Footer from "../../Components/Footer/Footer";
import TopBarMobile from "../../Components/TopBarMobile/TopBarMobile";
import BannerMobile from "../../Components/BannerMobile/BannerMobile";
import SubbannerListMobile from "../../Components/SubbannerListMobile/SubbannerListMobile";
import TextListMobile from "../../Components/TextListMobile/TextListMobile";

const LandingMobile = () => {
  return (
    <div className="flex flex-col">
      <TopBarMobile />
      <BannerMobile />
      <SubbannerListMobile />
      <TextListMobile />
      <Footer />
    </div>
  );
};

export default LandingMobile;
