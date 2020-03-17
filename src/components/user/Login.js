import React from "react";
import Cookies from 'universal-cookie';
import users from "../../utils/users";

const cookies = new Cookies();

export default props => {
    return <div className="component-container">
        <h1 className="page-title">Login</h1>
        <p className="page-description">Please log in to access the website.</p>
        <form className="auth-form" onSubmit={event => {
            event.preventDefault();
            if (parseInt(event.target.email.value)) {
                users.getProfile(parseInt(event.target.email.value))
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
            <input className="unit-button" type="submit" value="Login" />
        </form>
    </div>
}