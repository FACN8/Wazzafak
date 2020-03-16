import React from "react";
import Bprofile from "../../utils/busers";

export default props => {
    const [bProfileData, setBProfileData] = React.useState(null);

    React.useEffect(() => {
        if (props.buser)
            Bprofile.getBusiness(1/*props.buser.id*/).then(data => {
                setBProfileData(data[0]);
            }).catch(console.log);
    }, []);

    return <div className="component-container">
        {bProfileData ? (
            Object.keys(bProfileData).map(key => <div>{bProfileData[key]}</div>)
        ) : "Loading..."}
    </div>;
}