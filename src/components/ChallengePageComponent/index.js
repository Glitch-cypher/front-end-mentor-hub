import "./main.css";
import React, { useState } from "react";
import Sidebar from "../SidebarComponent";
import MainSection from "../MainSectionComponent/index";

function ChallengePage() {
  const [week, setWeek] = useState();

  return (
    <div className="main-content">
      <div className="weeks">
        <MainSection currentWeek={setWeek} week={week} />
      </div>
      <div className="side-bar">
        <Sidebar week={week} className="side" />
      </div>
    </div>
  );
}

export default ChallengePage;
