import React from "react";
import Busers from "../../utils/busers";

export default props => {
    const [applicantsData, setApplicantsData] = React.useState(null);

    React.useEffect(() => {

        if (props.vacancy)
            Busers.getApplicants(props.vacancy)
                .then(setApplicantsData)
                .catch(console.log)
    }, []);

    return <div className="component-container">{applicantsData ?
        applicantsData.map(applicant => {

            // return <div className="list-item">

            //     <img className="business-image" src={url} />
            //     <div>{applicant.}</div>
            //     {/* <div>{vacancy.title}</div>
            //     <div>{vacancy.wage}</div>
            //     <div>{vacancy.work_days}</div>
            //     <div>{vacancy.work_hours}</div>
            //     <div>{vacancy.descr}</div> */}

            // </div>

            return Object.keys(applicant).map(key => <div>{applicant[key]}</div>);

        }) : "Loading..."}</div>
}