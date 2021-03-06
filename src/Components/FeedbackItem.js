import React from "react";

function FeedbackItem({ data }) {
  const { name, imgUrl } = data;

  return (
    <div className="border p-4 flex flex-col max-w-md lg:mx-auto lg:flex-row">
      <div className="mr-4">
        <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
          <img
            src={imgUrl}
            alt=""
            className="w-20 h-20 m-2 lg:m-4 rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>
          <p className="mb-3 text-sm text-gray-500 text-justify italic">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear. We never had the chance to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
