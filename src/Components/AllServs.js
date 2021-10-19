import React from "react";
import { Link } from "react-router-dom";

function AllServs() {
  return (
    <div className="border grid grid-cols-1 lg:grid-cols-2 pt-8 rounded-lg m-4 px-4 lg:gap-8 lg:p-5">
      <div className="flex flex-col justify-start">
        <div
          className="flex flex-col w-full object-cover justify-items-start border rounded-lg overflow-hidden"
          style={{ minHeigth: "320px" }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="nike shoes"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium uppercase mt-4 lg:mt-0">Nike shoes</h1>
          <p className="text-sm text-gray-500 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officiis quam eveniet, fugiat architecto animi aperiam ratione modi dolor quidem veniam voluptates illo nemo veritatis.
          </p>
        </div>
        <Link
          to="/details"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-800 hover:text-purple-400 mt-4 mb-4 lg:mb-0"
        >
          More details
        </Link>
      </div>
    </div>
  );
}

export default AllServs;
