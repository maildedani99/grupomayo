import React from "react";
import useResponsive from "./Hooks/useResponsive";
import Landing from "./Pages/Landing/Landing";
import LandingMobile from "./Pages/LandingMobile/LandingMobile";

function App() {
  const { isDesktop } = useResponsive();

  return <>{isDesktop ? <Landing /> : <LandingMobile />}</>;
}

export default App;
