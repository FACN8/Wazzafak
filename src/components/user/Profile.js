import React from "react";
import path from "path";

export default props => {
    return <div className="component-container">
        <h1 className="page-title">My Profile</h1>
        {props.user ?
            <div className="unit-item">
                <img className="entry-item profile-image" alt="Profile Image" src={path.join(__dirname, 'res', 'user', props.user.id + '.png')} />
                <div className="entry-item name"><b>Name:</b> {props.user.first_name} {props.user.last_name}</div>
                <div className="entry-item phone"><b>Phone Number:</b> {props.user.phone}</div>
                <div className="entry-item email"><b>E-mail:</b> {props.user.email}</div>
                <div className="entry-item birth-year"><b>Year Of Birth:</b> {props.user.year_of_birth}</div>
                <div className="entry-item country"><b>Country:</b> {props.user.country}</div>
                <div className="entry-item bio"><b>Biography:</b> {props.user.bio}</div>
            </div>
            :
            <img
                style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
                src={path.join(__dirname, "res", "loading3.gif")}
                alt="Loading..."
            />}
    </div>;
}