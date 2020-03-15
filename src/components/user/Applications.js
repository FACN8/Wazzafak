import React from "react";
import Users from "../../utils/users";

export default props => {
    const [appData, setAppData] = React.useState(null);

    React.useEffect(() => {
        Users.getMyApplications(1)
            .then(setAppData)
            .catch(console.log)
    }, []);

    return <div className="component-container">{appData ?
        appData.map(app => {
            //display items of each application here

            return Object.keys(app).map(key => <div>{app[key]}</div>);

        }) : "Loading..."}</div>
}