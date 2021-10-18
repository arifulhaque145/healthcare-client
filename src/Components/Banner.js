import React from 'react'

function Banner() {
    // compo
    const bannerImg =
      "https://thumbs.dreamstime.com/b/doctor-woman-stethoscope-hospital-horizontal-banner-holding-background-200769310.jpg";
    return (
      <div style={{backgroundImage: `url(${bannerImg})`, height: "32em"}}>
        <h1>This is banner</h1>
      </div>
    );
}

export default Banner
