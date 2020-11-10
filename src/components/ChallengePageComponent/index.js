import "./main.css";
import React, { useState } from "react";
import Sidebar from "../SidebarComponent";
import MainSection from "../MainSectionComponent/index"

function ChallengePage() {
  const [week, setWeek] = useState(null)

  return (
    <div className="main-content">
      <div className="weeks">
      <MainSection setWeek = {setWeek}/>
      </div>
      <div className="side-bar">
        <Sidebar week={week} className="side" />
      </div>
    </div>
  );
}

export default ChallengePage;
