import React from "react";
import path from "path";

export default props => {
    return <div className="component-container">{props.vacancies ?
        props.vacancies.map(vacancy => {
            return <a href={"/vacancy?vacancyid=" + vacancy.id} className="clickable-item">
                <div className="list-item">
                    <img className="business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', vacancy.business_id + '.png')} />
                    <div className="entry-item title"><b>Vacancy Title:</b> {vacancy.title}</div>
                    <div className="entry-item wage"><b>Hourly Wage:</b> {vacancy.wage}</div>
                    <div className="entry-item work-days"><b>Work Days:</b> {vacancy.work_days}</div>
                    <div className="entry-item work-hours"><b>Work Hours:</b> {vacancy.work_hours}</div>
                    <div className="entry-item descr"><b>Vacancy Description:</b> {vacancy.descr}</div>
                </div>
            </a>
        })
        :
        <img
            style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
            src={path.join(__dirname, "res", "loading3.gif")}
            alt="Loading..."
        />}
    </div >
}