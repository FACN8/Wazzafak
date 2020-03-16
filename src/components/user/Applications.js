import React from "react";
import Users from "../../utils/users";
import path from "path";

export default props => {
    const [appData, setAppData] = React.useState(null);

    React.useEffect(() => {
        if (props.user)
            Users.getMyApplications(1/*props.user.id*/)
                .then(data => {
                    setAppData(data.map(application => {
                        let obj = props.vacancies.filter(vacancy => (application.vacancy_id === vacancy.id))[0];
                        obj.message = application.message;
                        return obj;
                    }));
                })
                .catch(console.log)
    }, []);

    return <div className="component-container">{appData ?
        appData.map(app => {

            let url = path.join(__dirname, 'res', 'buser', app.business_id + '.png');

            return <div className="list-item">

                <img className="business-image" alt="Business Profile" src={url} />
                <div className="id">{app.id}</div>
                <div className="title">{app.title}</div>
                <div className="wage">{app.wage}</div>
                <div className="work_days">{app.work_days}</div>
                <div className="work_hours">{app.work_hours}</div>
                <div className="descr">{app.descr}</div>
                <div className="message">{app.message}</div>

            </div>

        }) : "Loading..."}</div>
}