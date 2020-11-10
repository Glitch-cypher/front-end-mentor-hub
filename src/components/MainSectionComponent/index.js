import "./main.css";
import React from "react";

import IndividualChallenge from "../IndividualWeekComponent";

function MainSection({setWeek}) {
  let dataArray = [
    {
      id: 1,
      title: "Week 1 - Basic JS",
      description: "This week we will learn basic js",
      challenge: "The challenge is assigning varibles and",
    },
    {
      id:2,
      title: "Week 2 - Advanced JS",
      description: "This week we will learn advanced js",
      challenge: "The challenge is assigning array methods ..",
    },
  ];

  return dataArray.map((item) => <IndividualChallenge item={item} setWeek = {setWeek}/>);
}

export default MainSection;
