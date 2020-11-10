import "./main.css";
import React, { useState } from "react";
import Sidebar from "../SidebarComponent";

function ChallengePage() {
  return (
    <div className="main-content">
      <div className="weeks">Main</div>
      <div className="side-bar">
        <Sidebar week={1} className="side" />
      </div>
    </div>
  );
}

export default ChallengePage;
