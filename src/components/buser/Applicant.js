import React from "react";
import User from "../../utils/users";

export default props => {
    const [applicant, setApplicant] = React.useState(null);

    React.useEffect(() => {
        if (props.applicant)
            User.getProfile(props.applicant)
                .then(data => {
                    setApplicant(data[0]);
                })
                .catch(console.log);
    }, []);

    return <div className="component-container">
        {applicant ? (
            Object.keys(applicant).map(key => <div>{applicant[key]}</div>)
        ) : "Loading..."}
    </div>;
}