import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from 'universal-cookie';

import { getProfile, getMyApplications } from "./utils/users";
import { getBusiness } from "./utils/busers";
import { getVacancies, getBVacancies } from "./utils/vacancies";

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
      try {
        if (cookies.get('user')) {
          const user = await getProfile(parseInt(cookies.get('user')));
          const vacancies = await getVacancies();
          const applications = await getMyApplications(user[0].id);

          setUser(user[0]);
          setVacancies(vacancies);
          setApplications(applications.map(application => {
            let obj = vacancies.filter(vacancy => (application.vacancy_id === vacancy.id))[0];
            obj.message = application.message;
            return obj;
          }));
        } else if (cookies.get('buser')) {
          const buser = await getBusiness(parseInt(cookies.get('buser')));
          const bvacancies = await getBVacancies(buser[0].id);

          setBuser(buser[0]);
          setVacancies(bvacancies);
        }
      } catch (x) {
        console.log(x);
      }
    })();
  }, []);

  return (
    <div className="main-container">
      <Header user={user} buser={buser} />
      <Router>
        <Switch>
          <Route path="/" exact component={props =>
            <Intro user={user} />
          } />
          <Route path="/applications" component={props =>
            <User.Applications {...props} user={user} vacancies={vacancies} applications={applications} setApplications={setApplications} />
          } />
          <Route path="/business" component={props =>
            <User.Business {...props} user={user} />
          }>
          </Route>
          <Route path="/login" component={props =>
            <User.Login {...props} user={user} setUser={setUser} />
          } />
          <Route path="/profile" component={props =>
            <User.Profile {...props} user={user} setUser={setUser} />
          } />
          <Route path="/register" component={props =>
            <User.Register {...props} user={user} setUser={setUser} />
          } />
          <Route path="/vacancies" component={props =>
            <User.Vacancies {...props} user={user} vacancies={vacancies} setVacancies={setVacancies} />
          } />
          <Route path="/vacancy" component={props =>
            <User.Vacancy {...props} user={user} applications={applications} />
          } />
          <Route path="/applicant" component={props =>
            <Buser.Applicant {...props} buser={buser} />
          } />
          <Route path="/blogin" component={props =>
            <Buser.Blogin {...props} buser={buser} setBuser={setBuser} />
          } />
          <Route path="/bprofile" component={props =>
            <Buser.Bprofile {...props} buser={buser} setBuser={setBuser} />
          } />
          <Route path="/bregister" component={props =>
            <Buser.Bregister {...props} buser={buser} setBuser={setBuser} />
          } />
          <Route path="/bvacancies" component={props =>
            <Buser.Bvacancies {...props} buser={buser} vacancies={vacancies} />
          } />
          <Route path="/bvacancy" component={props =>
            <Buser.Bvacancy {...props} buser={buser} />
          } />
        </Switch>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
