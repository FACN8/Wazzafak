import React from "react";
import Cookies from "universal-cookie";
import { getBusiness } from "../../utils/busers";

const cookies = new Cookies();

export default props => {
    return (cookies.get('user')) ? window.location.href = "/vacancies" :
        (cookies.get('buser')) ? window.location.href = "/bvacancies" :
            <div className="component-container">
                <div className="intro-page">
                    <h1 className="page-title">Business Login</h1>
                    <p className="page-description">Please log in to access your business page.</p>
                    <form className="auth-form" onSubmit={event => {
                        event.preventDefault();
                        if (parseInt(event.target.email.value)) {
                            getBusiness(parseInt(event.target.email.value))
                                .then(data => {
                                    cookies.set('buser', data[0].id, { path: '/' });
                                    props.setBuser(data[0]);
                                    window.location.href = "/";
                                })
                                .catch(console.log);
                        }
                    }}>
                        <input id="email" className="unit-input" type="text" placeholder="Enter your e-mail" />
                        <input id="password" className="unit-input" type="password" placeholder="Enter your password" />
                        <input className="unit-button action-button" type="submit" value="Login" />
                        <a className="clickable-text" href="/bregister">Create a business account</a>
                    </form>
                </div>
            </div>
}