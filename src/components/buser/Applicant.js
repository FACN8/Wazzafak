import React from "react";
import usersUtil from "../../utils/users";
import path from "path";

export default props => {
    const [applicant, setApplicant] = React.useState(null);

    React.useEffect(() => {
        if (parseInt(props.location.search.split('=')[1]))
            usersUtil.getProfile(parseInt(props.location.search.split('=')[1]))
                .then(data => {
                    setApplicant(data[0]);
                })
                .catch(console.log);
    }, []);

    return <div className="component-container"> {applicant ?
        <div className="unit-item">
            <img className="entry-item profile-image" alt="Profile Image" src={path.join(__dirname, 'res', 'user', applicant.id + '.png')} />
            <div className="entry-item name"><b>Name:</b> {applicant.first_name} {applicant.last_name}</div>
            <div className="entry-item phone"><b>Phone Number:</b> {applicant.phone}</div>
            <div className="entry-item email"><b>E-mail:</b> {applicant.email}</div>
            <div className="entry-item birth-year"><b>Year Of Birth:</b> {applicant.year_of_birth}</div>
            <div className="entry-item country"><b>Country:</b> {applicant.country}</div>
            <div className="entry-item bio"><b>Biography:</b> {applicant.bio}</div>
        </div>
        :
        <img
            style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
            src={path.join(__dirname, "res", "loading3.gif")}
            alt="Loading..."
        />}}
    </div>;
}