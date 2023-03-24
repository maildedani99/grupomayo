import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import Banner from "../../Components/Banner/Banner";
import SubbannersList from "../../Components/SubbannersList/SubbannersList";
import TextsList from "../../Components/TextsList/TextsList";
import Footer from "../../Components/Footer/Footer";

const Landing = () => {
  return (
    <div className="max-w-[1279px] mx-auto">
      <TopBar />
      <Banner />
      <SubbannersList />
      <TextsList />
      <Footer />
    </div>
  );
};

export default Landing;
