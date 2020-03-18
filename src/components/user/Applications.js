import React from "react";
import Users from "../../utils/users";
import path from "path";

export default props => {
    const [appData, setAppData] = React.useState(null);

    React.useEffect(() => {
        if (props.user && props.vacancies)
            Users.getMyApplications(props.user.id)
                .then(data => {
                    setAppData(data.map(application => {
                        let obj = props.vacancies.filter(vacancy => (application.vacancy_id === vacancy.id))[0];
                        obj.message = application.message;
                        return obj;
                    }));
                })
                .catch(console.log)
    }, [props.user, props.vacancies]);

    return <div className="component-container">{appData ?
        appData.map(app => {

            let url = path.join(__dirname, 'res', 'buser', app.business_id + '.png');

            return <a className="entry-item clickable-item list-item" href={"/vacancy?vacancyid=" + app.id}>
                <img className="entry-item business-image" alt="Business Profile" src={url} />
                <div className="entry-item title"><b>Job Title:</b> {app.title}</div>
                <div className="entry-item wage"><b>Hourly Wage:</b> {app.wage}</div>
                <div className="entry-item work_days"><b>Work Days:</b> {app.work_days}</div>
                <div className="entry-item work_hours"><b>Work Hours:</b> {app.work_hours}</div>
                <div className="entry-item descr"><b>Job Description:</b> {app.descr}</div>
                <div className="entry-item message"><b>Application Message:</b> {app.message}</div>
            </a>
        }) : "Loading..."}</div>
}