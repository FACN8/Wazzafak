import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default props => {
    return <div className="header">{

        props.user ? <div className="header-bar">
            <p>
                Welcome back, <a style={{ "color": "white" }} href="/profile">{props.user.first_name}</a>!
            </p>
            <a href="/" style={{ "color": "white" }} onClick={event => {
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
                <a></a>
            </div>

    }</div >
}