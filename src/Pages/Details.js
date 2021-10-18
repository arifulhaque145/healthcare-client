import React from "react";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import Service from "../Components/Service";
import ServiceContainer from "../Components/ServiceContainer";
import useAuth from "../Hooks/useAuth";

function Details() {
  const newData = useAuth().data;

  // page
  return (
    <div>
      <Navs />
      <ServiceContainer>
        {newData.map((item) => (
          <Service key={item.key} data={item} />
        ))}
      </ServiceContainer>
      <Footer />
    </div>
  );
}

export default Details;
