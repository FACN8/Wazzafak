import React from "react";
import Users from "../../utils/users";

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
            return Object.keys(app).map(key => <div>{app[key]}</div>);
        }) : "Loading..."}</div>
}