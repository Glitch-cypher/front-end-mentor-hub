import "./main.css";
import React, { useState, useEffect } from "react";
import Feedback from "../FeedbackComponent";

function Sidebar({ week }) {
  const [feedback, setFeedback] = useState([]);
  const [input, setInput] = useState();
  const [key, setKey] = useState(0);
  const [deleteId, setDeleteId] = useState();
  const [editId, setEditId] = useState();

  useEffect(() => {
    async function getFeedback() {
      let response = await fetch(`http://localhost:5000/feedback/${week}`);
      let data = await response.json();
      setFeedback(data);
    }
    getFeedback();
  }, [week]);

  useEffect(() => {
    async function postFeedback() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback[feedback.length]),
      };
      const response = await fetch(
        "http://localhost:5000/feedback/",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (feedback != []) {
      postFeedback();
    }
  }, [feedback]);

  useEffect(() => {
    async function deleteFeedback() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://localhost:5000/feedback/${deleteId}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (feedback != []) {
      deleteFeedback();
    }
  }, [deleteId]);

  useEffect(() => {
    async function updateFeedback() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback[editId]),
      };
      const response = await fetch(
        `http://localhost:5000/feedback/${editId}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (feedback != []) {
      updateFeedback();
    }
  }, [editId]);

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

  function editComment(key, comment) {
    let index = feedback.findIndex((object) => object.key === key);
    feedback[index].comment = comment;
    setFeedback([...feedback]);
  }

  function deleteComment(key) {
    let index = feedback.findIndex((object) => object.key === key);
    setFeedback([...feedback.slice(0, index), ...feedback.slice(index + 1)]);
  }

  return (
    <div>
      {feedback.map((object) => {
        if (object.week === week) {
          return (
            <Feedback
              key={object.key}
              object={object}
              editComment={editComment}
              deleteComment={deleteComment}
            />
          );
        }
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
