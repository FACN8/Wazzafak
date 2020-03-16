import React from "react";
import User from "../../utils/users";

export default props => {
    return <div className="component-container">
        {props.user ? (
            Object.keys(props.user).map(key => <div>{props.user[key]}</div>)
        ) : "Loading..."}
    </div>;
}