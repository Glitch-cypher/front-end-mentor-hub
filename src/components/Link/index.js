import "./main.css";
import React, { useState } from "react";

function Link({ object, deleteLink, updateLink }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(object.projectlink);
  return (
    <div className="main-link-container">
      {!editing ? (
        <a className="link-style" href={`https://${object.projectlink}`}>
          {object.projectlink}
        </a>
      ) : null}

      {editing ? (
        <input
          className="link-edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          visibility={editing}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              updateLink(object.id, e.target.value);
              setEditing(false);
            }
          }}
        />
      ) : null}
      <div className="buttons">
        {!editing ? (
          <button
            className="link-edit-button"
            onClick={() => {
              setEditing(true);
            }}
          >
            edit
          </button>
        ) : null}
        <button
          className="link-delete-button"
          onClick={() => {
            deleteLink(object.id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
export default Link;
