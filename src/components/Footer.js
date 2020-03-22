import React from "react";
import Cookies from "universal-cookie";
import path from "path";

const cookies = new Cookies();

export default props => {
  return <div className="footer">

    {
      (cookies.get('user')) ?
        (
          <ul style={{ "margin": "0", "padding": "0", "display": "flex", "width": "100%", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "space-around", "listStyle": "none" }}>
            <li key="Profile">
              <a className="nav-item" style={{ "color": "white" }} href="/profile">
                <img className="nav-icon" src={path.join(__dirname, "res", "icon", "my-profile.png")} alt="My Profile Icon" />
                <span>My Profile</span>
              </a>
            </li>
            <li key="Vacancies">
              <a className="nav-item" style={{ "color": "white" }} href="/vacancies">
                <img className="nav-icon" src={path.join(__dirname, "res", "icon", "vacancies.png")} alt="Vacancies Icon" />
                <span>Vacancies</span>
              </a>
            </li>
            <li key="Applications">
              <a className="nav-item" style={{ "color": "white" }} href="/applications">
                <img className="nav-icon" src={path.join(__dirname, "res", "icon", "my-applications.png")} alt="My Applications Icon" />
                <span>Applications</span>
              </a>
            </li>
          </ul>
        ) : (cookies.get('buser') ?
          (
            <ul style={{ "margin": "0", "padding": "0", "display": "flex", "width": "100%", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "space-around", "listStyle": "none" }}>

              <li key="Bprofile">
                <a className="nav-item" style={{ "color": "white" }} href="/bprofile">
                  <img className="nav-icon" src={path.join(__dirname, "res", "icon", "my-business.png")} alt="My Business Icon" />
                  <span>My Business</span>
                </a>
              </li>
              <li key="Bvacancies">
                <a className="nav-item" style={{ "color": "white" }} href="/bvacancies">
                  <img className="nav-icon" src={path.join(__dirname, "res", "icon", "vacancies.png")} alt="My Vacancies Icon" />
                  <span>My Vacancies</span>
                </a>
              </li>
            </ul>
          ) : "")
    }

  </div>
}