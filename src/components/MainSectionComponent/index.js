import "./main.css";
import React from "react";

import IndividualChallenge from "../IndividualWeekComponent";

let exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae finibus augue, non euismod ex. Aenean mattis dignissim velit, ut imperdiet diam convallis nec. Mauris pulvinar nulla eu augue interdum tristique. Sed vitae neque lorem. Proin in turpis nunc. In lobortis iaculis neque, vitae tincidunt erat venenatis a. Donec ornare erat vel nisl pellentesque molestie.";

function MainSection({ currentWeek, week }) {
  let dataArray = [
    {
      id: 1,
      title: "Week 1 - Basic JS",
      description: exampleText,
      challenge: "The challenge is assigning varibles",
    },
    {
      id: 2,
      title: "Week 2 - Advanced JS",
      description: exampleText,
      challenge: "The challenge is assigning array methods ..",
    },
    {
      id: 3,
      title: "Week 3 - Node and Express",
      quote: "im a motivational quote",
      description: exampleText,
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
