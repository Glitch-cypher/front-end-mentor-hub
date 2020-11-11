import "./main.css";
import React, { useState } from "react";

function Feedback({ object, editComment, deleteComment }) {
  console.log(object);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(object.comment);
  return (
    <div className="comment-container">
      <h6 className="date">{object.dateAdded}</h6>
      {!editing ? <p className="comment">{object.comment}</p> : null}
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          visibility={editing}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              editComment(object.key, e.target.value);
              setEditing(false);
            }
          }}
        />
      ) : null}
      {!editing ? (
        <button
          onClick={() => {
            setEditing(true);
            console.log(editing);
          }}
        >
          edit
        </button>
      ) : null}
      <button
        onClick={() => {
          deleteComment(object.key);
        }}
      >
        delete
      </button>
    </div>
  );
}
export default Feedback;
