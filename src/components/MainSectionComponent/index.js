import "./main.css";
import React, { useState } from "react";

import IndividualChallenge from "../IndividualWeekComponent";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function MainSection() {
  let dataArray = [
    {
      id: 1,
      title: "Week 1 - Basic JS",
      description: "This week we will learn basic js",
      challenge: "The challenge is assigning varibles and",
    },
    {
      id: 2,
      title: "Week 2 - Advanced JS",
      description: "This week we will learn advanced js",
      challenge: "The challenge is assigning array methods ..",
    },
    {
      id: 3,
      title: "Week 3 - Node and Express",
      description: "This week we will learn node",
      challenge: "The challenge is node",
    },
  ];

  const [isOpen, setIsOpen] = useState(new Array(dataArray.length).fill(false));

  function makeOpen(index) {
    let newArray = new Array(dataArray.length).fill(false);
    console.log(newArray);
    setIsOpen([...newArray(0, index), true, ...newArray(index + 1)]);
  }

  return <IndividualChallenge />;
}

export default MainSection;
