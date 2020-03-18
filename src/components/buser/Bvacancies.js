import React from "react";
import path from "path";
import Vacancies from "../../utils/vacancies";

export default props => {
    const [bVacanciesData, setBVacanciesData] = React.useState(null);

    React.useEffect(() => {
        if (props.buser)
            Vacancies.getBVacancies(1/*props.buser.id*/)
                .then(setBVacanciesData)
                .catch(console.log);
    }, []);

    return <div className="component-container">{bVacanciesData ?
        bVacanciesData.map(vacancy => {
            return <div className="list-item">
                <img className="business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', vacancy.business_id + '.png')} />
                <div>{vacancy.id}</div>
                <div>{vacancy.title}</div>
                <div>{vacancy.wage}</div>
                <div>{vacancy.work_days}</div>
                <div>{vacancy.work_hours}</div>
                <div>{vacancy.descr}</div>
            </div>
        }) : "Loading..."}</div>
}