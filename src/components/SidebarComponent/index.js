import "./main.css";
import React, { useState, useEffect } from "react";
import Feedback from "../FeedbackComponent";

const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function Sidebar({ week }) {
  const [feedback, setFeedback] = useState([]);

  async function postFeedback(object) {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    };
    const response = await fetch(`${url}/feedback`, requestOptions);
    const data = await response.json();
    console.log(data);
    setFeedback([...feedback, data.data[0]]);
  }

  // function deleteComment(key) {
  //   let index = feedback.findIndex((object) => object.id === key);
  //   setFeedback([...feedback.slice(0, index), ...feedback.slice(index + 1)]);
  // }
  async function deleteFeedback(id) {
    // DELETE request using fetch with async/await
    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(`${url}/feedback/${id}`, requestOptions);
    const data = await response.json();
    let index = feedback.findIndex((object) => object.id === id);
    setFeedback([...feedback.slice(0, index), ...feedback.slice(index + 1)]);
  }
  async function updateFeedback(id, comment) {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback: comment }),
    };
    const response = await fetch(`${url}/feedback/${id}`, requestOptions);
    const data = await response.json();
    let editedFeedback = data.data[0];
    let index = feedback.findIndex((object) => object.id === editedFeedback.id);
    setFeedback([
      ...feedback.slice(0, index),
      editedFeedback,
      ...feedback.slice(index + 1),
    ]);
  }

  useEffect(() => {
    async function getFeedback() {
      let response = await fetch(`${url}/feedback`);
      let data = await response.json();
      setFeedback(data.data);
    }
    getFeedback();
  }, []);

  let reverse = [...feedback].reverse();

  return (
    <div>
      <h2 className="feedback-title">Mentor Feedback - Week {week}</h2>
      {week ? (
        <input
          className="input"
          placeholder="leave a comment.."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              let date = new Date().toGMTString();
              let feedback = e.target.value;
              postFeedback({ feedback: feedback, week: week, date: date });
              e.target.value = "";
            }
          }}
        />
      ) : null}

      {reverse.map((object) => {
        if (object.week === week) {
          return (
            <Feedback
              key={object.id}
              object={object}
              updateFeedback={updateFeedback}
              deleteFeedback={deleteFeedback}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
export default Sidebar;
