import "./main.css";
import React, { useState } from "react";

import cs from "classnames";
import styles from "./accordian.module.css";

function IndividualChallenge({ currentWeek, week, dataArray }) {
  const [link, setLink] = useState([]);
  let [activeItem, setActiveItem] = React.useState(4);

  function addLink(e) {
    setLink([...link, { text: e.target.value, week: week }]);
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
            return <a href={`https://${object.text}`}>{object.text}</a>;
          }
          return null;
        })}

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
      {/* <AccordianTitle
        onClick={() => {
          currentWeek(1);
          setActiveItem(1);
        }}
      >
        Week One
      </AccordianTitle>
      <AccordianBody show={activeItem === 1}>{accordianContent}</AccordianBody>
      <AccordianTitle
        onClick={() => {
          currentWeek(2);
          setActiveItem(2);
        }}
      >
        Week Two
      </AccordianTitle>
      <AccordianBody show={activeItem === 2}>{accordianContent}</AccordianBody>
      <AccordianTitle
        onClick={() => {
          currentWeek(3);
          setActiveItem(3);
        }}
      >
        Week Three
      </AccordianTitle>
      <AccordianBody show={activeItem === 3}>{accordianContent}</AccordianBody>
      <AccordianTitle
        onClick={() => {
          currentWeek(4);
          setActiveItem(4);
        }}
      >
        Week Four
      </AccordianTitle>
      <AccordianBody show={activeItem === 4}>{accordianContent}</AccordianBody> */}
    </div>
  );
}
export default IndividualChallenge;
