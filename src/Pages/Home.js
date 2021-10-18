import React from "react";
import Banner from "../Components/Banner";
import Covid from "../Components/Covid";
import Feedback from "../Components/Feedback";
import ServiceContainer from "../Components/ServiceContainer";

function Home() {
  // page
  return (
    <div id="home">
      <Banner />
      <ServiceContainer />
      <Covid />
      <Feedback />
    </div>
  );
}

export default Home;
