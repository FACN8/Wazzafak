import React from "react";
import path from "path";

export default props => {
    return <div className="component-container"> {props.user ?
        Object.keys(props.user).map(item => 
            (item==="id") ?
            <img className="profile-image" alt="profile" src={path.join(__dirname, 'res', 'user', props.user.id + '.png')} />
            : <div className={item}>{props.user[item]}</div>) 
        :("loading...")} </div>;
}