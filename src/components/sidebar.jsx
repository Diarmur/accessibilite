import React from "react";
import "../assets/css/sidebar.css";
import { FrontCard } from "./frontCard";
import { BackCard } from "./backCard";
//import sidebarImg from "../assets/img/bg-main-desktop.png";


export const Sidebar = () => {
  return(
    // <div className="Sidebar" style={{ backgroundImage:`url(${sidebarImg})`}}>
    <div className="Sidebar">
      <div className="Cards">

      <FrontCard />
      <BackCard />
      
      </div>
    </div>
  );
}