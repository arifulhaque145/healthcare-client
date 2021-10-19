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
    <BannerContainer className="flex justify-center items-center">
      <h2 className="text-4xl font-semibold text-black">Build something</h2>
    </BannerContainer>
  );
}

export default Banner;
