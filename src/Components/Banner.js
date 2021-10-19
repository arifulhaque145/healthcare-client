import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  background-image: url("https://i.ibb.co/mb2jHt9/banner.jpg");
  height: 32em;
  @media (max-width: 412px) {
    height: 20em;
  }
`;

function Banner() {
  // compo
  // const bannerImg = "https://i.ibb.co/mb2jHt9/banner.jpg";
  return (
    <BannerContainer className="flex flex-col justify-center items-start">
      <div className="flex flex-col lg:max-w-2xl sm:mx-auto sm:flex-row">
        <div className="lg:ml-32 p-5 lg:p-0">
          <h6 className="mb-4 text-2xl lg:text-3xl font-bold leading-5 uppercase">
            We are here to help you
          </h6>
          <p className="mb-4 lg:mb-0 text-sm text-md lg:text-lg text-gray-900 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            pariatur veniam explicabo alias sed expedita vel soluta quibusdam
            deleniti odio. Optio fugit nesciunt quisquam voluptate.
          </p>
          <button className="bg-blue-900 w-50 mx-auto px-5 py-2 lg:mt-10 text-white shadow-lg hover:bg-white hover:text-black">
            Click here to know more
          </button>
        </div>
      </div>
    </BannerContainer>
  );
}

export default Banner;
