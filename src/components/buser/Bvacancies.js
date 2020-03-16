import React from "react";
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

            return Object.keys(vacancy).map(item => <div>{vacancy[item]}</div>);

        }) : "Loading..."}</div>
}