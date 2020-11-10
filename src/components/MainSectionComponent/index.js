import "./main.css";
import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import IndividualChallenge from "../IndividualWeekComponent";

function MainSection() {
  let dataArray = [
    {
      title: "Week 1 - Basic JS",
      description: "This week we will learn basic js",
      challenge: "The challenge is assigning varibles and",
    },
    {
      title: "Week 2 - Advanced JS",
      description: "This week we will learn advanced js",
      challenge: "The challenge is assigning array methods ..",
    },
  ];

  return dataArray.map((item) => <IndividualChallenge item={item} />);
}

export default MainSection;
