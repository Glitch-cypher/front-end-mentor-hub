import "./main.css";
import React, { useState, useEffect } from "react";

import cs from "classnames";
import styles from "./accordian.module.css";
import Link from "../Link/";

function IndividualChallenge({ currentWeek, week, dataArray }) {
  const [link, setLink] = useState([]);
  //const [activeItem, setActiveItem] = React.useState(currentWeek);
  const [deleteId, setDeleteId] = useState();
  const [editId, setEditId] = useState();
  const [addedId, setAddedId] = useState(true);

  useEffect(() => {
    async function getLink() {
      let response = await fetch(`http://localhost:5000/link/?week=${week}`);
      let data = await response.json();
      setLink(data.data);
      console.log(data.data);
    }
    getLink();
  }, [week]);

  useEffect(() => {
    async function postLink() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(link[link.length - 1]),
      };
      const response = await fetch(
        "http://localhost:5000/link/",
        requestOptions
      );
      const data = await response.json();
      setLink([...link.slice(0, -1), ...data.data]);
      console.log(data.data);
    }
    if (link !== []) {
      postLink();
    }
  }, [addedId]);

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
    if (link !== []) {
      deleteLink();
    }
  }, [deleteId]);

  useEffect(() => {
    async function updateLink() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          link[
            link.findIndex((obj) => {
              return obj.id === editId;
            })
          ]
        ),
      };
      const response = await fetch(
        `http://localhost:5000/link/${editId}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    if (link !== []) {
      updateLink();
    }
  }, [editId]);

  function addLink(e, week) {
    setLink([...link, { projectLink: e.target.value, week: week }]);
  }

  function AccordianTitle({ children, onClick }) {
    return (
      <button className={styles.title} onClick={onClick}>
        {children}
      </button>
    );
  }
  function editLink(key, text) {
    let index = link.findIndex((object) => object.id === key);
    link[index].projectLink = text;
    setLink([...link]);
  }

  function deleteLink(key) {
    let index = link.findIndex((object) => object.id === key);
    setLink([...link.slice(0, index), ...link.slice(index + 1)]);
  }

  function AccordianBody({ children, show }) {
    return (
      <div className={cs(styles.body, { [styles.hidden]: !show })}>
        <div className={styles.bodyText}>
          <p className={styles.p}>{children.description}</p>
          <div className={styles.quoteBox}>
            <quote className={styles.quote}>{children.quote}</quote>
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
                    deleteLink={deleteLink}
                    setDeleteId={setDeleteId}
                    setEditId={setEditId}
                    editLink={editLink}
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
                addLink(e, week);
                e.target.value = "";
                setAddedId(!addedId);
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
