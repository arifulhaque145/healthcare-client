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
        </div>
        <div className="max-w-lg">
          <img src="https://i.ibb.co/SRjPZH0/3828537.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
