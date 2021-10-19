import React from 'react'

function Banner() {
    // compo
    const bannerImg = "https://i.ibb.co/mb2jHt9/banner.jpg";
    return (
      <div style={{backgroundImage: `url(${bannerImg})`, height: "32em"}}>
        <h1>This is banner</h1>
      </div>
    );
}

export default Banner
