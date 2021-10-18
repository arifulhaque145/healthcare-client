import React from "react";

function NotFound() {
  // page
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            back to homepage
          </button>
        </div>
        <div className="max-w-lg">
          <img
            src="https://imagevars.gulfnews.com/2017/8/28/1_16a083ca8dc.2081539_2008253998_16a083ca8dc_medium.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
