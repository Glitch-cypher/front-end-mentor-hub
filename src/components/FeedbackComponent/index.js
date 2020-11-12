import "./main.css";
import React, { useState } from "react";

function Feedback({
  object,
  editComment,
  deleteComment,
  setEditId,
  setDeleteId,
}) {
  console.log(object);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(object.comment);
  return (
    <div className="comment-container">
      <h6 className="date">{object.dateAdded}</h6>
      {!editing ? <p className="comment">{object.comment}</p> : null}
      {editing ? (
        <input
          className="mentor-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          visibility={editing}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              editComment(object.key, e.target.value);
              setEditing(false);
              setEditId(object.key);
            }
          }}
        />
      ) : null}
      {!editing ? (
        <button
          className="mentor-edit-button"
          onClick={() => {
            setEditing(true);
            console.log(editing);
          }}
        >
          edit
        </button>
      ) : null}
      <button
        className="mentor-delete-button"
        onClick={() => {
          deleteComment(object.key);
          setDeleteId(object.key);
        }}
      >
        delete
      </button>
    </div>
  );
}
export default Feedback;
