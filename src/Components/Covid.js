import React from "react";

const data = [
  { key: 1, name: "Paitents", count: "10,980" },
  { key: 2, name: "Recovered", count: "7,250" },
  { key: 3, name: "Death", count: "3,730" },
];

function Covid() {
  return (
    <div className="bg-red-200">
      <div className="heading text-center font-light upper uppercase text-2xl lg:text-4xl lg:mb-0 my-10 tracking-widest lg:pt-20">
        Covid-19 Report
      </div>
      <div
        id="covid"
        className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:p-20 p-10 bg-red-200"
      >
        {data.map((item) => (
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl py-20">
            <p className="lg:mx-32 text-center font-medium text-gray-600 lg:text-xl mb-5 uppercase">
              {item.name}
            </p>
            <p className="lg:mx-32 text-gray-500 text-center font-medium lg:text-6xl">
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Covid;
