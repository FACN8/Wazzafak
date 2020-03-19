import React from "react";
import path from "path";

import vacanciesUtil from "../../utils/vacancies";
import applicationsUtil from "../../utils/applications";

export default props => {
    const [vacancy, setVacancy] = React.useState(null);
    const [applications, setApplications] = React.useState(null);
    const [applicants, setApplicants] = React.useState([]);

    React.useEffect(() => {
        if (props.location.search.split('=')[1])
            vacanciesUtil.getVacancy(props.location.search.split('=')[1]).then(data => {
                setVacancy(data[0]);
            }).catch(console.log);
    }, []);

    React.useEffect(() => {
        if (vacancy)
            applicationsUtil.getVacancyApplications(vacancy.id)
                .then(setApplications)
                .catch(console.log);
    }, [vacancy]);

    React.useEffect(() => {
        if (applications)
            applications.map(app => {
                applicationsUtil.getApplicant(app.user_id)
                    .then(data => {

                        data[0].message = app.message;

                        setApplicants(previous => {
                            return previous.concat([data[0]])
                        })
                    })
            });
    }, [applications]);

    return <div className="component-container"> {vacancy ? (
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
                applicants ?
                    applicants.map(applicant =>
                        <a href={"/applicant?applicantid=" + applicant.id} className="clickable-item applicant-list-item">
                            <img className="entry-item nav-icon" alt="Profile Image" src={path.join(__dirname, 'res', 'user', applicant.id + '.png')} />
                            <div className="entry-item name"><b>Name:</b> {applicant.first_name} {applicant.last_name}</div>
                            <div className="entry-item phone"><b>Phone Number:</b> {applicant.phone}</div>
                            <div className="entry-item email"><b>E-mail:</b> {applicant.email}</div>
                            <div className="entry-item birth-year"><b>Year Of Birth:</b> {applicant.year_of_birth}</div>
                            <div className="entry-item country"><b>Country:</b> {applicant.country}</div>
                            <div className="entry-item bio"><b>Biography:</b> {applicant.bio}</div>
                            <div className="entry-item message"><b>Message:</b> {applicant.message}</div>
                        </a>
                    )
                    :
                    <img
                        style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
                        src={path.join(__dirname, "res", "loading3.gif")}
                        alt="Loading..."
                    />}
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