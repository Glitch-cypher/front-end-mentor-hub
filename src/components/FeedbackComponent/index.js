import "./main.css";
import React, { useState } from "react";

function Feedback({ object, updateFeedback, deleteFeedback }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(object.feedback);
  return (
    <div className="comment-container">
      <h6 className="date">{object.date}</h6>
      {!editing ? <p className="comment">{object.feedback}</p> : null}
      {editing ? (
        <input
          className="mentor-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          visibility={editing}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              updateFeedback(object.id, e.target.value);
              setEditing(false);
            }
          }}
        />
      ) : null}
      {!editing ? (
        <button
          className="mentor-edit-button"
          onClick={() => {
            setEditing(true);
          }}
        >
          edit
        </button>
      ) : null}
      <button
        className="mentor-delete-button"
        onClick={() => {
          deleteFeedback(object.id);
        }}
      >
        delete
      </button>
    </div>
  );
}
export default Feedback;
