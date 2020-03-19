import React from "react";
import path from "path";

export default props => {
    return <div className="component-container"> {props.buser ?
        <div className="unit-item">
            <img className="entry-item business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', props.buser.id + '.png')} />
            <div className="entry-item bname"><b>Business Name:</b> {props.buser.bname}</div>
            <div className="entry-item phone"><b>Phone Number:</b> {props.buser.phone}</div>
            <div className="entry-item email"><b>E-mail:</b> {props.buser.email}</div>
            <div className="entry-item address"><b>Business Address:</b> {props.buser.address}</div>
            <div className="entry-item city"><b>City:</b> {props.buser.city}</div>
            <div className="entry-item open-days"><b>Opening Days:</b> {props.buser.open_days}</div>
            <div className="entry-item open-hours"><b>Opening Hours:</b> {props.buser.open_hours}</div>
            <div className="entry-item descr"><b>Description:</b> {props.buser.descr}</div>
        </div>
        :
        <img
            style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
            src={path.join(__dirname, "res", "loading3.gif")}
            alt="Loading..."
        />}
    </div>;
}