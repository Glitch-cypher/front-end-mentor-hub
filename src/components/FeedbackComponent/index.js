import "./main.css";
import React, { useState } from "react";

function Feedback({
  object,
  editComment,
  deleteComment,
  setEditId,
  setDeleteId,
  feedback,
  setFeedback,
}) {
  console.log(object);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(object.feedback);

  async function updateFeedback(id) {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        feedback[
          feedback.findIndex((obj) => {
            return obj.id === id;
          })
        ]
      ),
      //look for return index property
    };
    const response = await fetch(
      `http://localhost:5000/feedback/${editId}`,
      requestOptions
    );
    const data = await response.json();
  }

  async function deleteFeedback() {
    // DELETE request using fetch with async/await
    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(
      `http://localhost:5000/feedback/${deleteId}`,
      requestOptions
    );
    const data = await response.json();
  }

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
              editComment(object.id, e.target.value);
              setEditing(false);
              setEditId(object.id);
              updateFeedback(object.id);
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
          deleteComment(object.id);
          setDeleteId(object.id);
          deleteFeedback(object.id);
        }}
      >
        delete
      </button>
    </div>
  );
}
export default Feedback;
