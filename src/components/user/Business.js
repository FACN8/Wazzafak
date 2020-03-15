import React from "react";
import Business from "../../utils/busers";

export default props => {
    const [businessData, setBusinessData] = React.useState(null);

    React.useEffect(() => {
        if (props.business)
            Business.getBusiness(props.business).then(data => {
                setBusinessData(data[0]);
            }).catch(console.log);
    }, []);

    return <div className="component-container">
        {businessData ? (
            Object.keys(businessData).map(key => <div>{businessData[key]}</div>)
        ) : "Loading..."}
    </div>;
}