import React from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const serviceData = [
  {
    key: 1,
    name: "abortive therapy",
    imgUrl: "https://i.ibb.co/Wp0t1sb/thrapy-1.jpg",
    catagory: "therapy",
    left: [
      { key: 1, subtitle: "Donation" },
      { key: 2, subtitle: "Offers" },
      { key: 3, subtitle: "Qualities" },
      { key: 4, subtitle: "Team" },
    ],
    right: [
      { key: 1, subtitle: "Services" },
      { key: 2, subtitle: "Jobs" },
    ],
  },
  {
    key: 6,
    name: "Cholecystectomy",
    imgUrl: "https://i.ibb.co/xSbJPN0/thrapy-2.jpg",
    catagory: "sergury",
    left: [
      { key: 1, subtitle: "Donation" },
      { key: 2, subtitle: "Team" },
    ],
    right: [
      { key: 1, subtitle: "Services" },
      { key: 2, subtitle: "Jobs" },
    ],
  },
  {
    key: 12,
    name: "Whole Blood Donation",
    imgUrl: "https://i.ibb.co/rpMhDKC/thrapy-3.jpg",
    catagory: "donation",
    left: [
      { key: 1, subtitle: "Donation" },
      { key: 2, subtitle: "Team" },
    ],
    right: [
      { key: 1, subtitle: "Services" },
      { key: 2, subtitle: "Jobs" },
    ],
  },
  {
    key: 13,
    name: "Power Red Donation",
    imgUrl: "https://i.ibb.co/rpMhDKC/thrapy-3.jpg",
    catagory: "donation",
    left: [
      { key: 1, subtitle: "Donation" },
      { key: 2, subtitle: "Offers" },
      { key: 3, subtitle: "Team" },
    ],
    right: [
      { key: 1, subtitle: "Services" },
      { key: 2, subtitle: "Jobs" },
    ],
  },
];

function ServiceContainer() {
  return (
    <div id="services" className="lg:p-20 p-5">
      <div className="heading text-center font-light upper uppercase text-2xl lg:text-4xl lg:mb-0 my-5 tracking-widest lg:pb-24">
        Services
      </div>
      <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {serviceData.map((item) => (
          <Service key={item.key} data={item} />
        ))}
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
