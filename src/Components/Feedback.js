import React from "react";
import FeedbackItem from "./FeedbackItem";

const newUsers = [
  {
    key: 1,
    name: "John Kollins",
    imgUrl:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
    catagory: "therapy",
  },
  {
    key: 2,
    name: "Gray Norman",
    imgUrl:
      "https://canadianimmigrant.ca/wp-content/uploads/Dweep-scaled-e1576068091503-683x470.jpg",
    catagory: "therapy",
  },
  {
    key: 3,
    name: "Tim Doffman",
    imgUrl:
      "https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0=",
    catagory: "therapy",
  },
  {
    key: 4,
    name: "Justin Nash",
    imgUrl:
      "https://media.istockphoto.com/photos/nothing-is-a-magnet-for-success-like-self-confidence-picture-id1262964459?b=1&k=20&m=1262964459&s=170667a&w=0&h=ksXAqZ43oZWWm9Zdz_4IMLHGCpS9_yR5Tc4zCex2-Ao=",
    catagory: "therapy",
  },
  {
    key: 5,
    name: "Graham Walt",
    imgUrl:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2018-11/21/full/1542791990-3278.jpg",
    catagory: "therapy",
  },
];

function Feedback() {
  // compo
  return (
    <div id="feedback" className="lg:p-14">
      <div className="heading text-center font-light upper uppercase text-2xl lg:text-4xl lg:mb-24 my-10 tracking-widest">
        Patient Feedbacks
      </div>
      <div className="grid grid-cols-1 lg:gap-4 lg:row-gap-5 lg:grid-cols-2 lg:m-5">
        {newUsers.map((item) => (
          <FeedbackItem key={item.key} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Feedback;
