import React from "react";
import { Link } from "react-router-dom";

function Service({ data }) {
  // compo
  const { name, imgUrl, catagory } = data;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={imgUrl} className="object-cover w-full h-64" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <span
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {catagory}
          </span>
        </p>
        <span
          aria-label="Category"
          title="Simple is better"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {name}
        </span>
        <p className="mb-5 text-gray-700 text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia
          consequuntur magni voluptatem doloremque.
        </p>
        <Link
          to="/details"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-800 hover:text-purple-400"
        >
          More details
        </Link>
      </div>
    </div>
  );
}

export default Service;
