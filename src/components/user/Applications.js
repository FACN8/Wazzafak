import React from "react";
import path from "path";

export default props => {
    return <div className="component-container">{props.applications ?
        props.applications.map(app => {

            let url = path.join(__dirname, 'res', 'buser', app.business_id + '.png');

            return <a className="entry-item clickable-item list-item" href={"/vacancy?vacancyid=" + app.id}>
                <img className="entry-item business-image" alt="Business Profile" src={url} />
                <div className="entry-item title"><b>Job Title:</b> {app.title}</div>
                <div className="entry-item wage"><b>Hourly Wage:</b> {app.wage}</div>
                <div className="entry-item work_days"><b>Work Days:</b> {app.work_days}</div>
                <div className="entry-item work_hours"><b>Work Hours:</b> {app.work_hours}</div>
                <div className="entry-item descr"><b>Job Description:</b> {app.descr}</div>
                <div className="entry-item message"><b>Application Message:</b> {app.message}</div>
            </a>
        })
        :
        <img
            style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
            src={path.join(__dirname, "res", "loading3.gif")}
            alt="Loading..."
        />}
    </div>
}