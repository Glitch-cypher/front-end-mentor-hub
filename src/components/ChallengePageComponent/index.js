import "./main.css";
import React, { useState } from "react";
import Sidebar from "../SidebarComponent";
import MainSection from "../MainSectionComponent/index";

function ChallengePage() {
  const [week, setWeek] = useState(null);

  function currentWeek(week) {
    setWeek(week);
  }

  return (
    <div className="main-content">
      <div className="weeks">
        <MainSection currentWeek={currentWeek} week={week} />
      </div>
      <div className="side-bar">
        <Sidebar week={week} className="side" />
      </div>
    </div>
  );
}

export default ChallengePage;
