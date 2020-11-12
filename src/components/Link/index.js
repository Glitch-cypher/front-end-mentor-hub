import "./main.css";
import React, { useState } from "react";

function Link({ object, deleteLink, setDeleteId, setEditId, editLink }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(object.projectLink);
  return (
    <div>
      {!editing ? <a href={`https://${object.projectLink}`}>{object.projectLink}</a> : null}
      {editing ? (
        <input
          className="link-edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          visibility={editing}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              editLink(object.id, e.target.value);
              setEditing(false);
              setEditId(object.id);
            }
          }}
        />
      ) : null}

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
          deleteLink(object.id);
          setDeleteId(object.id);
        }}
      >
        delete
      </button>
    </div>
  );
}
export default Link;
