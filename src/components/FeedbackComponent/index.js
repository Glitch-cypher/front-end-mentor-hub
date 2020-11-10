import "./main.css";
import React from "react";

function Feedback({ object }) {
  console.log(object);
  return (
    <div className="comment-container">
      <h6 className="date">{object.dateAdded}</h6>
      <p className="comment">{object.comment}</p>
    </div>
  );
}
export default Feedback;
