import React from "react";
import { useParams } from "react-router";
import Sutitles from "../Components/Sutitles";
import useAuth from "../Hooks/useAuth";

function Details() {
  const idUrl = useParams();
  const { data } = useAuth();

  const ndata = data.find((item) => item.key === parseInt(idUrl.id));
  const { name, left, right } = ndata;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto uppercase">
          {name}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
        <div className="space-y-6 sm:px-16">
          {left.map((item) => (
            <Sutitles key={item.key} data={item} />
          ))}
        </div>
        <div className="space-y-6 sm:px-16">
          {right.map((item) => (
            <Sutitles key={item.key} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
