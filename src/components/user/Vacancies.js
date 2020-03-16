import React from "react";

export default props => {
    return <div className="component-container">{props.vacancies ?
        props.vacancies.map(vacancy => {
            return Object.keys(vacancy).map(item => <div>{vacancy[item]}</div>);

        }) : "Loading..."}</div>
}