import "./main.css";
import React from "react";

import IndividualChallenge from "../IndividualWeekComponent";

function MainSection({ currentWeek, week }) {
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

  return (
    <IndividualChallenge
      week={week}
      dataArray={dataArray}
      currentWeek={currentWeek}
    />
  );
}

export default MainSection;
