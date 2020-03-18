import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default props => {
    return (cookies.get('user')) ? window.location.href = "/vacancies" :
        (cookies.get('buser')) ? window.location.href = "/bvacancies" :
            <div className="component-container">
                <div className="intro-page">
                    <h1 className="page-title">Create Account</h1>
                    <p className="page-description">Please enter your details to start using Wazzafak.</p>
                    <form className="auth-form" onSubmit={event => {
                        event.preventDefault();
                        //REGISTER USER POST REQUEST UTILS
                    }}>
                        <input id="first-name" className="unit-input" type="text" placeholder="Enter your first name" />
                        <input id="last-name" className="unit-input" type="text" placeholder="Enter your last name" />
                        <input id="phone" className="unit-input" type="text" placeholder="Enter phone number" />
                        <input id="email" className="unit-input" type="text" placeholder="Enter your e-mail" />
                        <input id="password" className="unit-input" type="password" placeholder="Enter password" />
                        <input id="confirm-password" className="unit-input" type="password" placeholder="Confirm password" />
                        <input id="birth-year" className="unit-input" type="text" placeholder="Enter year of birth" />
                        <input id="country" className="unit-input" type="text" placeholder="Enter country" />
                        <textarea id="bio" className="unit-input" name="bio" cols="22" rows="5" placeholder="Enter biography (5-10 lines)" />
                        <input className="unit-button" type="submit" value="Register" />
                    </form>
                </div>
            </div>
}