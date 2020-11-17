import "./main.css";
import React, { useState, useEffect } from "react";

import cs from "classnames";
import styles from "./accordian.module.css";
import Link from "../Link/";

const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function IndividualChallenge({ currentWeek, week, dataArray }) {
  const [link, setLink] = useState([]);

  useEffect(() => {
    async function getLink() {
      let response = await fetch(`${url}/link`);
      let data = await response.json();
      setLink(data.data);
    }
    getLink();
  }, []);

  async function postLink(e, week = 4) {
    // POST request using fetch with async/await
    console.log(week);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectlink: e.target.value, week: week }),
    };
    const response = await fetch(`${url}/link/`, requestOptions);
    const data = await response.json();
    console.log(data.data);
    setLink([...link, ...data.data]);
  }

  async function deleteLink(key) {
    // DELETE request using fetch with async/await
    let index = link.findIndex((object) => object.id === key);
    setLink([...link.slice(0, index), ...link.slice(index + 1)]);
    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(`${url}/link/${key}`, requestOptions);
    const data = await response.json();
    console.log(data);
  }

  async function updateLink(id, projectLink) {
    // PATCH request using fetch with async/await
    console.log(projectLink);
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectLink }),
    };
    const response = await fetch(`${url}/link/${id}`, requestOptions);
    const data = await response.json();
    let editedLink = data.data[0];
    let index = link.findIndex((object) => object.id === editedLink.id);
    setLink([...link.slice(0, index), editedLink, ...link.slice(index + 1)]);
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
        <div className={styles.bodyText}>
          <p className={styles.p}>{children.description}</p>
          <div className={styles.quoteBox}>
            <p className={styles.quote}>{children.quote}</p>
          </div>
          <h2 className={styles.h2}>Learning:</h2>
          <p className={styles.p}>{children.learning}</p>
          <h2 className={styles.h2}>Challenge:</h2>
          <a className={styles.challenge} href={children.challengeLink}>
            {children.challenge}
          </a>
        </div>
        <div className={styles.linkInputContainer}>
          <div className={styles.linkbox}>
            {link.map((object) => {
              if (object.week === week) {
                return (
                  <Link
                    key={object.id}
                    object={object}
                    updateLink={updateLink}
                    deleteLink={deleteLink}
                  />
                );
              }
              return null;
            })}
          </div>

          <input
            className={styles.input}
            placeholder="Add all links to this week"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                postLink(e, week);
                e.target.value = "";
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
                if (week === object.id) {
                  currentWeek();
                } else {
                  currentWeek(object.id);
                }
              }}
            >
              {object.title}
            </AccordianTitle>
            <div>
              <AccordianBody show={week === object.id}>{object}</AccordianBody>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default IndividualChallenge;
