import "./main.css";
import React, { useState, useEffect } from "react";
import Feedback from "../FeedbackComponent";

function Sidebar({ week }) {
  const [feedback, setFeedback] = useState([]);
  const [input, setInput] = useState();
  const [deleteId, setDeleteId] = useState();
  const [editId, setEditId] = useState();
  const [addedId, setAddedId] = useState(true);

  useEffect(() => {
    async function getFeedback() {
      let response = await fetch(
        `http://localhost:5000/feedback/?week=${week}`
      );
      let data = await response.json();
      console.log(data.data);
      setFeedback(data.data);
    }
    getFeedback();
  }, [week]);

  useEffect(() => {
    async function postFeedback() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback[feedback.length - 1]),
      };
      const response = await fetch(
        "http://localhost:5000/feedback/",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      // let week = data.data.filter((object)=> object.week === week)
      // setFeedback(...week);
      //Change backend to return the full database

    }
    if (feedback !== []) {
      postFeedback();
    }
  }, [addedId]);

  useEffect(() => {
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
      console.log(data);
    }
    if (feedback !== []) {
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
        //look for return index property
      };
      const response = await fetch(
        `http://localhost:5000/feedback/${editId}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (feedback !== []) {
      updateFeedback();
    }
  }, [editId]);

  function addFeedback(input, week, dateAdded) {
    setFeedback([
      ...feedback,
      {
        feedback: input,
        week: week,
        date: dateAdded,
      },
    ]);
  }

  function addInput(text) {
    setInput(text);
  }

  function editComment(key, comment) {
    let index = feedback.findIndex((object) => object.id === key);
    feedback[index].feedback = comment;
    setFeedback([...feedback]);
  }

  function deleteComment(key) {
    let index = feedback.findIndex((object) => object.id === key);
    setFeedback([...feedback.slice(0, index), ...feedback.slice(index + 1)]);
  }

  return (
    <div>
      {feedback.map((object) => {
        if (object.week === week) {
          return (
            <Feedback
              setDeleteId={setDeleteId}
              setEditId={setEditId}
              key={object.id}
              object={object}
              editComment={editComment}
              deleteComment={deleteComment}
              setAddedId={setAddedId}
              // addedId={addedId}
            />
          );
        }
        return null;
      })}
      <input
        className="input"
        placeholder="leave a comment.."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addFeedback(input, week, new Date().toGMTString());
            setInput((e.target.value = ""));
            setAddedId(!addedId);
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
