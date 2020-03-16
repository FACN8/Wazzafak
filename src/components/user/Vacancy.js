import React from "react";
import Vacancies from "../../utils/vacancies";

export default props => {
    const [vacancyData, setVacancyData] = React.useState(null);

    React.useEffect(() => {
        if (props.vacancy)
            Vacancies.getVacancy(props.vacancy).then(data => {
                setVacancyData(data[0]);
            }).catch(console.log);
    }, []);

    return <div className="component-container">
        {vacancyData ? (
            Object.keys(vacancyData).map(key => <div>{vacancyData[key]}</div>)
        ) : "Loading..."}
    </div>;
}