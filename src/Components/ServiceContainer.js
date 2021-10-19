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
    <div id="services" className="lg:p-20 p-5">
      <div className="heading text-center font-light upper uppercase text-4xl lg:mb-20 mb-10 tracking-widest">
        Services
      </div>
      <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <Service data={voi} />
        <Service data={voi} />
        <Service data={voi} />
        <Service data={voi} />
      </div>
      <div className="flex my-10">
        <button className="bg-red-900 w-50 mx-auto px-5 py-2 lg:mt-10 text-white shadow-lg hover:bg-white hover:text-black">
          <Link to="/allservices">Checkout Our Services</Link>
        </button>
      </div>
    </div>
  );
}

export default ServiceContainer;
