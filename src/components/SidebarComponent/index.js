import "./main.css";
import React, { useState } from "react";
import Feedback from "../FeedbackComponent";

function Sidebar(week) {
  const [feedback, setFeedback] = useState([]);
  const [input, setInput] = useState();
  const [key, setKey] = useState(0);

  function addKey() {
    setKey(key + 1);
    return key;
  }

  function addFeedback(input, week, dateAdded) {
    setFeedback([
      ...feedback,
      {
        comment: input,
        week: week,
        key: addKey(),
        dateAdded: dateAdded,
      },
    ]);
  }

  function addInput(text) {
    setInput(text);
  }

  return (
    <div>
      {feedback.map((object) => {
        return <Feedback key={object.key} object={object} />;
      })}
      <input
        className="input"
        placeholder="leave a comment.."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addFeedback(input, week, new Date().toGMTString());
            setInput((e.target.value = ""));
          }
        }}
        onChange={(e) => {
          addInput(e.target.value);
        }}
      />
    </div>
  );
}
export default Sidebar;
