import React from "react";
import FeedbackItem from "./FeedbackItem";

const voi = {
  key: 1,
  name: "heart sergury",
  imgUrl: "https://thefinancialexpress.com.bd/uploads/1619621365.jpg",
  catagory: "therapy",
};

function Feedback() {
  // compo
  return (
    <div id="feedback" className="lg:p-14">
      <div className="heading text-center font-light upper uppercase text-2xl lg:text-4xl lg:mb-24 my-10 tracking-widest">
        Patient Feedbacks
      </div>
      <div className="grid gap-4 lg:row-gap-5 lg:grid-cols-2 m-5">
        <FeedbackItem data={voi} />
        <FeedbackItem data={voi} />
        <FeedbackItem data={voi} />
        <FeedbackItem data={voi} />
      </div>
    </div>
  );
}

export default Feedback;
