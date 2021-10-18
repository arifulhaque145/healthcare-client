import React from "react";
import Service from "../Components/Service";
import useAuth from "../Hooks/useAuth";

function AllServices() {
  const newData = useAuth().data;

  // page
  return (
    <div>
      {newData.map((item) => (
        <Service key={item.key} data={item} />
      ))}
    </div>
  );
}

export default AllServices;
