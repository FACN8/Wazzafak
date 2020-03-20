import React from "react";
import path from "path";

import vacanciesUtil from "../../utils/vacancies";
import applicationsUtil from "../../utils/applications";

export default props => {
    const [vacancy, setVacancy] = React.useState(null);

    React.useEffect(() => {
        if (props.location.search.split('=')[1])
            vacanciesUtil.getVacancy(props.location.search.split('=')[1]).then(data => {
                setVacancy(data[0]);
            }).catch(console.log);
    }, [props.applications]);

    return <div className="component-container">
        <h1 className="page-title">Vacancy Information</h1>
        {vacancy ? (
            <div className="unit-item">
                <a className="clickable-item business-image" href={"/business?businessid=" + vacancy.business_id}>
                    <img className="business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', vacancy.business_id + '.png')} />
                </a>
                <div className="entry-item title"><b>Vacancy Title:</b> {vacancy.title}</div>
                <div className="entry-item wage"><b>Hourly Wage:</b> {vacancy.wage}</div>
                <div className="entry-item work-days"><b>Work Days:</b> {vacancy.work_days}</div>
                <div className="entry-item work-hours"><b>Work Hours:</b> {vacancy.work_hours}</div>
                <div className="entry-item descr"><b>Vacancy Description:</b> {vacancy.descr}</div>
                {
                    props.applications ?
                        props.applications.map(element => element.id).includes(vacancy.id) ? "You have applied for this position!" :
                            (<div>
                                <input className="unit-input" id={vacancy.title + vacancy.id} type="text" placeholder="Short message" />
                                <button className="unit-button" onClick={() => applicationsUtil.addApplication(props.user.id, vacancy.id, document.querySelector('#' + vacancy.title + vacancy.id).value ? document.querySelector('#' + vacancy.title + vacancy.id).value : 'no value, its null but ok').then(response => alert(response))}>Apply for Position</button>
                            </div>) : ""
                }
            </div>
        )
            :
            <img
                style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
                src={path.join(__dirname, "res", "loading3.gif")}
                alt="Loading..."
            />}
    </div >;
}