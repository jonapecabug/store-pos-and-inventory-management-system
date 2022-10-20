import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import FaceIcon from "@mui/icons-material/Face";
// import LogoutIcon from "@mui/icons-material/Logout";

const SideNavigation = ({ setAuth }) => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div className="Profile">
          <FaceIcon sx={{ fontSize: 80 }} />
          <p>Cashier Name</p>
        </div>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
        {/* <li>
          <div id="icon">
            <LogoutIcon sx={{ fontSize: 35 }} />
          </div>
          <button onClick={() => setAuth(false)}>Log-Out</button>
        </li> */}
      </ul>
    </div>
  );
};

export default SideNavigation;
