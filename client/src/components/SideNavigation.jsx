import React, { useState, useEffect } from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import FaceIcon from "@mui/icons-material/Face";
// import LogoutIcon from "@mui/icons-material/Logout";

const SideNavigation = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      setName(parseRes.username);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getName();
  });

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div className="Profile">
          <FaceIcon sx={{ fontSize: 80 }} />
          <p>{name}</p>
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
