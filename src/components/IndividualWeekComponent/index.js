import "./main.css";
import React, { useState } from "react";

import cs from "classnames";
import styles from "./accordian.module.css";

function IndividualChallenge({ currentWeek, week, dataArray }) {
  const [link, setLink] = useState([]);
  const [activeItem, setActiveItem] = React.useState(4);
  const [key, setKey] = useState(0);

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
