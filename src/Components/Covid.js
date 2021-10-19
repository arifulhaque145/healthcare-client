import React from "react";

const data = [{ key: 1 }, { key: 2 }, { key: 3 }];

function Covid() {
  return (
    <div
      id="covid"
      className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:p-20 p-10 bg-red-200"
    >
      {data.map((item) => (
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <p className="lg:mx-32 my-20 text-center font-bold">
            Football Sports
          </p>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        </div>
      ))}
    </div>
  );
}

export default Covid;
