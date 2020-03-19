import React from "react";
import Cookies from 'universal-cookie';
import usersUtil from "../../utils/users";

const cookies = new Cookies();

export default props => {
    return (cookies.get('user')) ? window.location.href = "/vacancies" :
        (cookies.get('buser')) ? window.location.href = "/bvacancies" :
            <div className="component-container">
                <div className="intro-page">
                    <h1 className="page-title">Login</h1>
                    <p className="page-description">Please log in to access the website.</p>
                    <form className="auth-form" onSubmit={event => {
                        event.preventDefault();
                        if (parseInt(event.target.email.value)) {
                            usersUtil.getProfile(parseInt(event.target.email.value))
                                .then(data => {
                                    cookies.set('user', data[0].id, { path: '/' });
                                    props.setUser(data[0]);
                                    window.location.href = "/";
                                })
                                .catch(console.log);
                        }
                    }}>
                        <input id="email" className="unit-input" type="text" placeholder="Enter your e-mail" />
                        <input id="password" className="unit-input" type="password" placeholder="Enter your password" />
                        <input className="unit-button action-button" type="submit" value="Login" />
                    </form>
                </div>
            </div>
}