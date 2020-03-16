import React from "react";
//import Business from "../../utils/busers";
import path from "path";

export default props => {
    // const [businessData, setBusinessData] = React.useState(null);

    // React.useEffect(() => {
    //     if (props.business)
    //         Business.getBusiness(props.business).then(data => {
    //             setBusinessData(data[0]);
    //         }).catch(console.log);
    // }, []);


    return <div className="component-container"> {props.business ?
        Object.keys(props.business).map(item => 
            (item==="id") ?
            <img className="business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', props.business.id + '.png')} />
            : <div className={item}>{props.business[item]}</div>) 
        :("loading...")} </div>;
   
    // return <div className="component-container">
    //     {businessData ? (
    //         Object.keys(businessData).map(key => <div>{businessData[key]}</div>)
    //     ) : "Loading..."}
    // </div>;
}