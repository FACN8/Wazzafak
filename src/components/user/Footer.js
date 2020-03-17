import React from "react";
import { BrowserRouter as Router, Switch, Route, a } from "react-router-dom";

export default props => {
  return <div className="footer">

    <ul style={{ "display": "flex", "width": "100%", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "space-around", "listStyle": "none" }}>
      {/* <li key="Intro">
                <a style={{ "color": "white" }} href="/">Intro</a>
              </li> */}
      <li key="Applications">
        <a style={{ "color": "white" }} href="/applications">applications</a>
      </li>
      {/* <li key="Area">
                <a style={{ "color": "white" }} href="/area">area</a>
              </li> */}
      {/* <li key="Business">
        <a style={{ "color": "white" }} href="/business">business</a>
      </li> */}
      {/* <li key="Login">
                <a style={{ "color": "white" }} href="/login">login</a>
              </li> */}
      {/* <li key="Map">
                <a style={{ "color": "white" }} href="/map">map</a>
              </li> */}
      <li key="Profile">
        <a style={{ "color": "white" }} href="/profile">profile</a>
      </li>
      {/* <li key="Register">
                <a style={{ "color": "white" }} href="/register">register</a>
              </li> */}
      <li key="Vacancies">
        <a style={{ "color": "white" }} href="/vacancies">vacancies</a>
      </li>
      {/* <li key="Vacancy">
        <a style={{ "color": "white" }} href="/vacancy">vacancy</a>
      </li> */}
      <li key="Applicant">
        <a style={{ "color": "white" }} href="/applicant">applicant</a>
      </li>
      {/* <li key="Applicants">
                <a style={{ "color": "white" }} href="/applicants">applicants</a>
              </li> */}
      {/* <li key="Blogin">
                <a style={{ "color": "white" }} href="/blogin">blogin</a>
              </li> */}
      <li key="Bprofile">
        <a style={{ "color": "white" }} href="/bprofile">bprofile</a>
      </li>
      {/* <li key="Bregister">
                <a style={{ "color": "white" }} href="/bregister">bregister</a>
              </li> */}
      <li key="Bvacancies">
        <a style={{ "color": "white" }} href="/bvacancies">bvacancies</a>
      </li>
    </ul>

  </div>
}