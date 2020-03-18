import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie';

import usersUtil from "./utils/users";
import busersUtil from "./utils/busers";
import vacanciesUtil from "./utils/vacancies";

import "./App.css";
import User from "./components/user";
import Buser from "./components/buser/";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cookies = new Cookies();

function App() {
  const [user, setUser] = React.useState(null);
  const [buser, setBuser] = React.useState(null);

  const [vacancies, setVacancies] = React.useState(null);
  const [applications, setApplications] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      if (cookies.get('user')) {
        try {
          const user = await usersUtil.getProfile(parseInt(cookies.get('user')));
          const vacancies = await vacanciesUtil.getVacancies();
          const applications = await usersUtil.getMyApplications(user[0].id);

          setUser(user[0]);
          setVacancies(vacancies);
          setApplications(applications.map(application => {
            let obj = vacancies.filter(vacancy => (application.vacancy_id === vacancy.id))[0];
            obj.message = application.message;
            return obj;
          }));
        } catch (x) {
          console.log(x);
        }
      }

      if (cookies.get('buser')) {
        busersUtil.getBusiness(parseInt(cookies.get('buser')))
          .then(data => setBuser(data[0]))
          .catch(console.log)

        //load b vacancies
        //load b applicants
      }
    })();
  }, []);

  return (
    <div className="main-container">
      <Header user={user} buser={buser} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Intro user={user} />
          </Route>
          <Route path="/applications">
            <User.Applications user={user} vacancies={vacancies} applications={applications} setApplications={setApplications} />
          </Route>
          <Route path="/business" component={props =>
            <User.Business {...props} user={user} />
          }>
          </Route>
          <Route path="/login">
            <User.Login user={user} setUser={setUser} />
          </Route>
          <Route path="/profile">
            <User.Profile user={user} setUser={setUser} />
          </Route>
          <Route path="/register">
            <User.Register user={user} setUser={setUser} />
          </Route>
          <Route path="/vacancies">
            <User.Vacancies user={user} vacancies={vacancies} setVacancies={setVacancies} />
          </Route>
          <Route path="/vacancy" component={props =>
            <User.Vacancy {...props} user={user} applications={applications} />
          }>
          </Route>
          <Route path="/applicant">
            <Buser.Applicant buser={buser} />
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
