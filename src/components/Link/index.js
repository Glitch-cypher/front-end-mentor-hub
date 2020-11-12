import "./main.css";
import React, { useState } from "react";

function Link({ object, deleteLink, setDeleteId, setEditId, editLink }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(object.text);
  return (
    <div className="main-link-container">
      {!editing ? (
        <a className="link-style" href={`https://${object.text}`}>
          {object.text}
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
              editLink(object.key, e.target.value);
              setEditing(false);
              setEditId(object.key);
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
              console.log(editing);
            }}
          >
            edit
          </button>
        ) : null}
        <button
          className="link-delete-button"
          onClick={() => {
            deleteLink(object.key);
            setDeleteId(object.key);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
export default Link;
