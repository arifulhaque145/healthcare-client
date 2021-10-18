import React from "react";
import { Link } from "react-router-dom";

function Service({ data }) {
  // compo
  const { name, imgUrl, catagory } = data;
  return (
    <div>
      <h3>{imgUrl}</h3>
      <h1>{name}</h1>
      <small>{catagory}</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro
        eveniet harum sunt modi quibusdam assumenda, unde aspernatur ratione
        voluptates.
      </p>
      <button>
        <Link to="/details">Click</Link>
      </button>
    </div>
  );
}

export default Service;
