import "./main.css";
import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import cs from "classnames";
import styles from "./accordian.module.css";

function IndividualChallenge() {
  const [link, setLink] = useState([]);
  let [activeItem, setActiveItem] = React.useState(4);

  function addLink(e) {
    setLink([...link, e.target.value]);
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

        {link.map((text) => {
          return <a href={`https://${text}`}>{text}</a>;
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

  const accordianContent = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
      orci ut ipsum commodo ullamcorper eu sed enim. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Etiam pellentesque eros a hendrerit varius.
      Donec elementum sodales ex, eget vestibulum leo mollis eu. Ut sed
      imperdiet{" "}
    </p>
  );

  return (
    <div className={styles.container}>
      <AccordianTitle onClick={() => setActiveItem(1)}>Week One</AccordianTitle>
      <AccordianBody show={activeItem === 1}>{accordianContent}</AccordianBody>
      <AccordianTitle onClick={() => setActiveItem(2)}>Week Two</AccordianTitle>
      <AccordianBody show={activeItem === 2}>{accordianContent}</AccordianBody>
      <AccordianTitle onClick={() => setActiveItem(3)}>
        Week Three
      </AccordianTitle>
      <AccordianBody show={activeItem === 3}>{accordianContent}</AccordianBody>
      <AccordianTitle onClick={() => setActiveItem(4)}>
        Week Four
      </AccordianTitle>
      <AccordianBody show={activeItem === 4}>{accordianContent}</AccordianBody>
    </div>
  );
}
export default IndividualChallenge;
