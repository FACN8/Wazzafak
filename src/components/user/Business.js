import React from "react";
import businessUtil from "../../utils/busers";
import vacanciesUtil from "../../utils/vacancies";
import path from "path";

export default props => {
    const [business, setBusiness] = React.useState(null);
    const [bVacancies, setBVacancies] = React.useState(null);

    React.useEffect(() => {
        if (props.location.search.split('=')[1])
            businessUtil.getBusiness(props.location.search.split('=')[1]).then(data => {
                setBusiness(data[0]);
            }).catch(console.log);
    }, []);

    React.useEffect(() => {
        if (business)
            vacanciesUtil.getBVacancies(business.id)
                .then(setBVacancies)
                .catch(console.log);
    }, [business]);

    return <div className="component-container">
        {(business && bVacancies) ? (
            <div className="unit-item">
                <img className="entry-item business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', business.id + '.png')} />
                <div className="entry-item bname"><b>Business Name:</b> {business.bname}</div>
                <div className="entry-item phone"><b>Phone Number:</b> {business.phone}</div>
                <div className="entry-item email"><b>E-mail:</b> {business.email}</div>
                <div className="entry-item address"><b>Business Address:</b> {business.address}</div>
                <div className="entry-item city"><b>City:</b> {business.city}</div>
                <div className="entry-item open-days"><b>Opening Days:</b> {business.open_days}</div>
                <div className="entry-item open-hours"><b>Opening Hours:</b> {business.open_hours}</div>
                <div className="entry-item descr"><b>Description:</b> {business.descr}</div>

                {bVacancies.map(vacancy => {
                    return <a href={"/vacancy?vacancyid=" + vacancy.id} className="clickable-item sublist-item">
                        <div><b>{vacancy.title}</b></div>
                        <div>Hourly Wage: {vacancy.wage}</div>
                    </a>
                })}
            </div>
        )
            :
            <img
                style={{ "marginTop": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}
                src={path.join(__dirname, "res", "loading3.gif")}
                alt="Loading..."
            />}
    </div>;
}