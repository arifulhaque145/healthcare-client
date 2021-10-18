import React from "react";
import { Link } from "react-router-dom";

function Service({ data }) {
  // compo
  const { name, imgUrl, catagory } = data;
  return (
    <div className="w-72 flex flex-col text-center items-center bg-white p-3 m-5 rounded-md shadow-lg">
      <img src={imgUrl} alt="" className="w-full rounded-md" />
      <h1 className="text-2xl my-2">{name}</h1>
      <small className="my-3 italic text-sm">{catagory}</small>
      <p className="text-justify text-sm my-2 mx-3 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro
        eveniet harum sunt modi quibusdam assumenda, unde aspernatur ratione
        voluptates.
      </p>
      <button className="bg-blue-500 my-3 px-8 py-2 text-white hover:bg-white hover:text-black hover:shadow-lg">
        <Link to="/details">Details</Link>
      </button>
    </div>
  );
}

export default Service;
