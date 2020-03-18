import React from "react";
import path from "path";

// import Bprofile from "../../utils/busers";

export default props => {
    // const [bProfileData, setBProfileData] = React.useState(null);

    // React.useEffect(() => {
    //     if (props.buser)
    //         Bprofile.getBusiness(1/*props.buser.id*/).then(data => {
    //             setBProfileData(data[0]);
    //         }).catch(console.log);
    // }, []);

    // return <div className="component-container">
    //     {bProfileData ? (
    //         Object.keys(bProfileData).map(key => <div>{bProfileData[key]}</div>)
    //     ) : "Loading..."}
    // </div>;
    return <div className="component-container"> {props.buser ?
        Object.keys(props.buser).map(item => 
            (item==="id") ?
            <img className="business-image" alt="Business Profile" src={path.join(__dirname, 'res', 'buser', props.buser.id + '.png')} />
            : <div className={item}>{props.buser[item]}</div>) 
        :("loading...")} </div>;
}