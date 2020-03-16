import React from "react";
import path from "path";
import applications from "../../utils/applications";

export default props => {
    return <div className="component-container">{props.vacancies ?
        props.vacancies.map(vacancy => {
            let url = path.join(__dirname, 'res', 'buser', vacancy.business_id + '.png');

            return <div className="list-item">

                <img className="business-image" alt="Business Profile" src={url} />
                <div className="id">{vacancy.id}</div>
                <div className="title">{vacancy.title}</div>
                <div className="wage">{vacancy.wage}</div>
                <div className="work_days">{vacancy.work_days}</div>
                <div className="work_hours">{vacancy.work_hours}</div>
                <div className="descr">{vacancy.descr}</div>
                <input id={vacancy.title} type="text" placeholder="Short message for employer" />
                <button className="unit-button" onClick={() => applications.addApplication(props.user.id, vacancy.id, document.querySelector('#' + vacancy.title).value ? document.querySelector('#' + vacancy.title).value : 'no value, its null but ok').then(response => alert(response))}>Apply for Position</button>

            </div>

            // return Object.keys(vacancy).map(item => <div className="list-item">{vacancy[item]}</div>);

        }) : "Loading..."}</div>
}