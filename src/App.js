import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Intro from "./components/Intro";

import TempUsers from "./utils/users";
import TempBusers from "./utils/busers";
import Vacancies from "./utils/vacancies";

import User from "./components/user";
import Buser from "./components/buser/";

import "./App.css";
import Bheader from "./components/buser/Bheader";
import Header from "./components/user/Header";
import Bfooter from "./components/buser/Bfooter";
import Footer from "./components/user/Footer";


function App() {
  const [user, setUser] = React.useState(null);
  const [business, setBusiness] = React.useState(null);
  const [applicant, setApplicant] = React.useState(null);
  const [vacancy, setVacancy] = React.useState(null);
  const [buser, setBuser] = React.useState(null);
  const [header, setHeader] = React.useState(true);
  const [footer, setFooter] = React.useState(true);
  const [location, setLocation] = React.useState(null);
  const [vacancies, setVacancies] = React.useState(null);

  React.useEffect(() => {
    Vacancies.getVacancies()
      .then(setVacancies)
      .catch(console.log);

    //Temporary user data:
    TempUsers.getProfile(1)
      .then(data => {
        setUser(data[0]);
      })
      .catch(console.log);

    //Temporary buser data:
    TempBusers.getBusiness(1)
      .then(data => {
        setBuser(data[0]);
      })
      .catch(console.log);

    //Temporary business:
    setBusiness(1);

    //Temporary vacancy:
    setVacancy(3);

    //Temporary applicant:
    setApplicant(2);
  }, [])

  return (
    <div>
      {user ? user.email : "No user"} {/*THIS LINE IS TEMPORARY*/}
      {(header) ? ((buser) ? <Bheader /> : <Header />) : <div></div>}
      <Router>
        <div>
          <nav>
            <ul style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "listStyle": "none" }}>
              <li key="Intro">
                <Link to="/">Intro</Link>
              </li>
              <li key="Applications">
                <Link to="/applications">applications</Link>
              </li>
              <li key="Area">
                <Link to="/area">area</Link>
              </li>
              <li key="Business">
                <Link to="/business">business</Link>
              </li>
              <li key="Login">
                <Link to="/login">login</Link>
              </li>
              <li key="Map">
                <Link to="/map">map</Link>
              </li>
              <li key="Profile">
                <Link to="/profile">profile</Link>
              </li>
              <li key="Register">
                <Link to="/register">register</Link>
              </li>
              <li key="Vacancies">
                <Link to="/vacancies">vacancies</Link>
              </li>
              <li key="Vacancy">
                <Link to="/vacancy">vacancy</Link>
              </li>
              <li key="Applicant">
                <Link to="/applicant">applicant</Link>
              </li>
              <li key="Blogin">
                <Link to="/blogin">blogin</Link>
              </li>
              <li key="Bprofile">
                <Link to="/bprofile">bprofile</Link>
              </li>
              <li key="Bregister">
                <Link to="/bregister">bregister</Link>
              </li>
              <li key="Bvacancies">
                <Link to="/bvacancies">bvacancies</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Intro user={user} />
            </Route>
            <Route path="/applications">
              <User.Applications user={user} vacancies={vacancies} setBusiness={setBusiness} />
            </Route>
            <Route path="/area">
              <User.Area user={user} location={location} setLocation={setLocation} />
            </Route>
            <Route path="/business">
              <User.Business user={user} business={business} />
            </Route>
            <Route path="/login">
              <User.Login user={user} setUser={setUser} />
            </Route>
            <Route path="/map">
              <User.Map user={user} />
            </Route>
            <Route path="/profile">
              <User.Profile user={user} setUser={setUser} />
            </Route>
            <Route path="/register">
              <User.Register user={user} setUser={setUser} />
            </Route>
            <Route path="/vacancies">
              <User.Vacancies user={user} vacancies={vacancies} setVacancies={setVacancies} setBusiness={setBusiness} />
            </Route>
            <Route path="/vacancy">
              <User.Vacancy user={user} vacancy={vacancy} />
            </Route>
            <Route path="/applicant">
              <Buser.Applicant buser={buser} applicant={applicant} />
            </Route>
            <Route path="/applicants">
              <Buser.Applicants buser={buser} />
            </Route>
            <Route path="/blogin">
              <Buser.Blogin buser={buser} setBuser={setBuser} />
            </Route>
            <Route path="/bprofile">
              <Buser.Bprofile buser={buser} setBuser={setBuser} />
            </Route>
            <Route path="/bregister">
              <Buser.Bregister buser={buser} setBuser={setBuser} />
            </Route>
            <Route path="/bvacancies">
              <Buser.Bvacancies buser={buser} />
            </Route>
          </Switch>
        </div>
      </Router>
      {(footer) ? ((buser) ? <Bfooter /> : <Footer />) : <div></div>}
    </div>
  );
}

export default App;
