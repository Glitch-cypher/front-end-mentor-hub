import "./main.css";
import React, { useState, useEffect } from "react";

import cs from "classnames";
import styles from "./accordian.module.css";

function IndividualChallenge({ currentWeek, week, dataArray }) {
  const [link, setLink] = useState([]);
  const [activeItem, setActiveItem] = React.useState(4);
  const [key, setKey] = useState(0);
  const [deleteId, setDeleteId] = useState();
  const [editId, setEditId] = useState();

  useEffect(() => {
    async function getLink() {
      let response = await fetch(`http://localhost:5000/link/${week}`);
      let data = await response.json();
      setLink(data);
    }
    getLink();
  }, [week]);

  useEffect(() => {
    async function postLink() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(link[link.length]),
      };
      const response = await fetch(
        "http://localhost:5000/link/",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (link != []) {
      postLink();
    }
  }, [link]);

  useEffect(() => {
    async function deleteLink() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://localhost:5000/link/${deleteId}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (link != []) {
      deleteLink();
    }
  }, [deleteId]);

  useEffect(() => {
    async function updateLink() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(link[editId]),
      };
      const response = await fetch(
        `http://localhost:5000/link/${editId}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (link != []) {
      updateLink();
    }
  }, [editId]);

  function addKey() {
    setKey(key + 1);
    return key;
  }
  function addLink(e) {
    setLink([...link, { text: e.target.value, week: week, key: addKey() }]);
  }

  function AccordianTitle({ children, onClick }) {
    return (
      <button className={styles.title} onClick={onClick}>
        {children}
      </button>
    );
  }

  function AccordianBody({ children, show }) {
    return (
      <div className={cs(styles.body, { [styles.hidden]: !show })}>
        {children}

        {link.map((object) => {
          if (object.week === week) {
            return (
              <div key={object.key}>
                <a href={`https://${object.text}`}>{object.text}</a>
              </div>
            );
          }
          return null;
        })}
        <div>
          <input
            placeholder="Add all links to this week"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addLink(e);
                e.target.value = "";
                console.log(link);
              }
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {dataArray.map((object) => {
        return (
          <div key={object.id}>
            <AccordianTitle
              onClick={() => {
                currentWeek(object.id);
                setActiveItem(object.id);
              }}
            >
              {object.title}
            </AccordianTitle>
            <AccordianBody show={activeItem === object.id}>
              {object.description}
              <br />
              {object.challenge}
            </AccordianBody>
          </div>
        );
      })}
    </div>
  );
}
export default IndividualChallenge;
