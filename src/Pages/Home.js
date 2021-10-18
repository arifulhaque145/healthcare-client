import React from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import ServiceContainer from "../Components/ServiceContainer";

function Home() {
  // page
  return (
    <div>
      <Navs />
      <Banner />
      <ServiceContainer />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Home;
