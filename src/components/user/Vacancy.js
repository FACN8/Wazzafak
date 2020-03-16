import React from "react";
import path from "path";

// import Vacancies from "../../utils/vacancies";

export default props => {
    // const [vacancyData, setVacancyData] = React.useState(null);

    // React.useEffect(() => {
    //     if (props.vacancy)
    //         Vacancies.getVacancy(props.vacancy).then(data => {
    //             setVacancyData(data[0]);
    //         }).catch(console.log);
    // }, []);

    // return <div className="component-container">
    //     {vacancyData ? (
    //         Object.keys(vacancyData).map(key => <div>{vacancyData[key]}</div>)
    //     ) : "Loading..."}
    // </div>;
    return <div className="component-container"> {props.vacancy ?
        Object.keys(props.vacancy).map(item => 
            (item==="business_id") ?
            <img className="business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', props.vacancy.business_id + '.png')} />
            : <div className={item}>{props.vacancy[item]}</div>) 
        :("loading...")} </div>;


}