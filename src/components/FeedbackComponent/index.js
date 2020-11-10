import "./main.css";
import React from "react";

function Feedback({ object }) {
  console.log(object);
  return (
    <div>
      <h6>{object.dateAdded}</h6>
      <p>{object.comment}</p>
    </div>
  );
}
export default Feedback;
