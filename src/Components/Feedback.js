import React from "react";
import Service from "./Service";

const voi = {
  key: 1,
  name: "heart sergury",
  imgUrl: "https://thefinancialexpress.com.bd/uploads/1619621365.jpg",
  catagory: "therapy",
};

function Feedback() {
  // compo
  return (
    <div id="feedback" className="mb-20">
      <div className="heading text-center font-light upper uppercase text-4xl mt-20 mb-14 tracking-widest">
        Patient Feedbacks
      </div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-32 justify-items-center">
        <Service data={voi} />
        <Service data={voi} />
        <Service data={voi} />
        <Service data={voi} />
      </div>
    </div>
  );
}

export default Feedback;
