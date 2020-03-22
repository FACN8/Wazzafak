import React from "react";
import Cookies from "universal-cookie";
import path from "path";

const cookies = new Cookies();

export default props => {
    return <div className="header">{
        (props.user || props.buser) ? <div className="header-bar">
            <p className="user-info">
                <img className="user-icon" src={props.user ? path.join(__dirname, "res", "user", props.user.id + ".png") : path.join(__dirname, "res", "buser", props.buser.id + ".png")} alt="User Icon" />
                Welcome back,&nbsp;&nbsp;<a style={{ "color": "white" }} href={props.user ? "/profile" : "/bprofile"}>{props.user ? props.user.first_name : props.buser.bname}</a>!
            </p>
            <a href="/" className="action-button" onClick={event => {
                cookies.remove('user');
                cookies.remove('buser');
                window.location.href = "/";
            }}>Logout</a>
        </div>
            :
            <div className="header-bar">
                <p>
                    Welcome! <a style={{ "color": "white" }} href="/login">Login</a> or <a style={{ "color": "white" }} href="/register">Register</a>
                </p>
                <a style={{ "color": "white" }} href="/blogin">I am a business</a>
            </div>
    }</div >
}