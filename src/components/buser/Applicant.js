import React from "react";
import path from "path";

// import User from "../../utils/users";

export default props => {
    // const [applicant, setApplicant] = React.useState(null);

    // React.useEffect(() => {
    //     if (props.applicant)
    //         User.getProfile(props.applicant)
    //             .then(data => {
    //                 setApplicant(data[0]);
    //             })
    //             .catch(console.log);
    // }, []);

    // return <div className="component-container">
    //     {applicant ? (
    //         Object.keys(applicant).map(key => <div>{applicant[key]}</div>)
    //     ) : "Loading..."}
    // </div>;
    return <div className="component-container"> {props.applicant ?
        Object.keys(props.applicant).map(item => 
            (item==="id") ?
            <img className="profile-image" alt="applicant" src={path.join(__dirname, 'res', 'user', props.applicant.id + '.png')} />
            : <div className={item}>{props.applicant[item]}</div>) 
        :("loading...")} </div>;
}