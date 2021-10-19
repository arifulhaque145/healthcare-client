import React from "react";

function Sutitles({ data }) {
  const { subtitle } = data;
  return (
    <div className="border p-4 lg:border-none flex flex-col max-w-md sm:flex-row">
      <div className="mb-4 mr-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
          <svg
            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            ></polygon>
          </svg>
        </div>
      </div>
      <div>
        <h6 className="mb-3 text-xl font-bold leading-5">{subtitle}</h6>
        <p className="text-sm text-gray-900">
          A flower in my garden, a mystery in my panties. Heart attack never
          stopped old Big Bear.
        </p>
      </div>
    </div>
  );
}

export default Sutitles;
