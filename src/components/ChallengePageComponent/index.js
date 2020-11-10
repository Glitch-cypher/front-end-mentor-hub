import "./main.css";
import React, { useState } from "react";
import Sidebar from "../SidebarComponent";

function ChallengePage() {
  return (
    <div>
      <div className = "main">
        <p>Main</p>
      </div>
      <Sidebar week={1} className = "side" />
    </div>
  );
}

export default ChallengePage;
