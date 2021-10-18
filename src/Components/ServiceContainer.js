import React from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const voi = {
  key: 1,
  name: "heart sergury",
  imgUrl: "https://thefinancialexpress.com.bd/uploads/1619621365.jpg",
  catagory: "therapy",
};

function ServiceContainer() {
  // compo
  return (
    <div id="services">
      <div className="heading text-center font-light upper uppercase text-4xl mt-20 mb-14 tracking-widest">
        Services
      </div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-32 justify-items-center">
        <Service data={voi} />
        <Service data={voi} />
        <Service data={voi} />
        <Service data={voi} />
      </div>
      <div className="flex my-10">
        <button className="bg-red-900 w-50 mx-auto px-5 py-2 my-5 mb-16 text-white shadow-lg">
          <Link to="/allservices">Checkout Our Services</Link>
        </button>
      </div>
    </div>
  );
}

export default ServiceContainer;
