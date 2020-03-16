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

                <img className="business-image" src={url} />
                <div>{app.id}</div>
                <div>{app.title}</div>
                <div>{app.wage}</div>
                <div>{app.work_days}</div>
                <div>{app.work_hours}</div>
                <div>{app.descr}</div>
                <div>{app.message}</div>

            </div>

        }) : "Loading..."}</div>
}