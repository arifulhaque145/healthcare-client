import React from "react";
import AllServs from "../Components/AllServs";
import useAuth from "../Hooks/useAuth";

function AllServices() {
  const newData = useAuth().data;

  const therapy = newData.filter((item) => item.catagory === "therapy");
  const sergury = newData.filter((item) => item.catagory === "sergury");
  const donation = newData.filter((item) => item.catagory === "donation");

  return (
    <div className="w-full lg:py-6 mt-6 lg:mt-0">
      <div>
        <div className="flex justify-center w-50 mx-auto my-4 lg:mb-14">
          <span className="bg-black h-px flex-grow t-2 relative top-4 lg:top-5"></span>
          <span className="flex-none text-black text-xl lg:text-4xl uppercase title-font font-light text-center mb-1 mx-5">
            Therapy
          </span>
          <span className="bg-black h-px flex-grow t-2 relative top-4 lg:top-5"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:mb-20 mb-10">
          {therapy.map((item) => (
            <AllServs key={item.key} data={item} />
          ))}
        </div>
        <div className="flex justify-center w-50 mx-auto my-4">
          <span className="bg-black h-px flex-grow t-2 relative top-4 lg:top-5"></span>
          <span className="flex-none text-black text-xl lg:text-4xl uppercase title-font font-light text-center mb-1 mx-5">
            surgury
          </span>
          <span className="bg-black h-px flex-grow t-2 relative top-4 lg:top-5"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:mb-20 mb-10">
          {sergury.map((item) => (
            <AllServs key={item.key} data={item} />
          ))}
        </div>
        <div className="flex justify-center w-50 mx-auto my-4">
          <span className="bg-black h-px flex-grow t-2 relative top-4 lg:top-5"></span>
          <span className="flex-none text-black text-xl lg:text-4xl uppercase title-font font-light text-center mb-1 mx-5">
            blood donation
          </span>
          <span className="bg-black h-px flex-grow t-2 relative top-4 lg:top-5"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:mb-20 mb-10">
          {donation.map((item) => (
            <AllServs key={item.key} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllServices;
