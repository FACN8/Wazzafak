import React from "react";
import Vacancies from "../../utils/vacancies";

export default props => {
    React.useEffect(() => {
        Vacancies.getVacancies()
            .then(props.setVacancies)
            .catch(console.log)
    }, [])

    return <div className="component-container">{props.vacancies ?
        props.vacancies.map(vacancy => {
            //display items of each vacancy here
            return Object.keys(vacancy).map(item => <div>{vacancy[item]}</div>);
        }) : "Loading..."}</div>
}