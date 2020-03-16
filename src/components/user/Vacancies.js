import React from "react";
import path from "path";
const applications = require('../../utils/applications.js');

export default props => {
    return <div className="component-container">{props.vacancies ?
        props.vacancies.map(vacancy => {
            let url = path.join(__dirname, 'res', 'buser', vacancy.business_id + '.png');

            return <div className="list-item">

                <img className="business-image" src={url} />
                <div>{vacancy.id}</div>
                <div>{vacancy.title}</div>
                <div>{vacancy.wage}</div>
                <div>{vacancy.work_days}</div>
                <div>{vacancy.work_hours}</div>
                <div>{vacancy.descr}</div>
                <input id={vacancy.title} type="text" placeholder="Short message for employer" />
                <button className="unit-button" onClick={() => applications.addApplication(props.user.id, vacancy.id, document.querySelector('#' + vacancy.title).value ? document.querySelector('#' + vacancy.title).value : 'no value, its null but ok').then(response => alert(response))}>Apply for Position</button>

            </div>

            // return Object.keys(vacancy).map(item => <div className="list-item">{vacancy[item]}</div>);

        }) : "Loading..."}</div>
}