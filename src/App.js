import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Intro from "./components/Intro";

import User from "./components/user";
import Buser from "./components/buser/";

import "./App.css";
import Bheader from "./components/buser/Bheader";
import Header from "./components/user/Header";
import Bfooter from "./components/buser/Bfooter";
import Footer from "./components/user/Footer";


function App() {
  let header = true;
  let footer = true;
  let buser = false;
  return (
    <div>
    {(header) ? ((buser) ? <Bheader/>:<Header/>):<div></div>}
    <Router>
      <div>
        <nav>
          <ul style={ { "display": "flex", "flex-direction": "row", "justify-content": "space-around", "list-style": "none" } }>
            <li>
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/applications">applications</Link>
            </li>
            <li>
              <Link to="/area">area</Link>
            </li>
            <li>
              <Link to="/business">business</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/map">map</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/vacancies">vacancies</Link>
            </li>
            <li>
              <Link to="/vacancy">vacancy</Link>
            </li>
            <li>
              <Link to="/applicant">applicant</Link>
            </li>
            <li>
              <Link to="/blogin">blogin</Link>
            </li>
            <li>
              <Link to="/bprofile">bprofile</Link>
            </li>
            <li>
              <Link to="/bregister">bregister</Link>
            </li>
            <li>
              <Link to="/bvacancies">bvacancies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/applications">
            <User.Applications />
          </Route>
          <Route path="/area">
            <User.Area />
          </Route>
          <Route path="/business">
            <User.Business />
          </Route>
          <Route path="/login">
            <User.Login />
          </Route>
          <Route path="/map">
            <User.Map />
          </Route>
          <Route path="/profile">
            <User.Profile />
          </Route>
          <Route path="/register">
            <User.Register />
          </Route>
          <Route path="/vacancies">
            <User.Vacancies />
          </Route>
          <Route path="/vacancy">
            <User.Vacancy />
          </Route>
          <Route path="/applicant">
            <Buser.Applicant />
          </Route>
          <Route path="/applicants">
            <Buser.Applicants />
          </Route>
          <Route path="/blogin">
            <Buser.Blogin />
          </Route>
          <Route path="/bprofile">
            <Buser.Bprofile />
          </Route>
          <Route path="/bregister">
            <Buser.Bregister />
          </Route>
          <Route path="/bvacancies">
            <Buser.Bvacancies />
          </Route>
        </Switch>
      </div>
    </Router>
    {(footer) ? ((buser) ? <Bfooter/>:<Footer/>):<div></div>}    
    </div>
  );
}

export default App;
