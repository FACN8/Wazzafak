import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default props => {
    return (cookies.get('user')) ? window.location.href = "/vacancies" :
        (cookies.get('buser')) ? window.location.href = "/bvacancies" :
            <div className="component-container">
                <div className="intro-page">
                    <h1 className="page-title">Create Business</h1>
                    <p className="page-description">Please enter your business details to post your first vacancy.</p>
                    <form className="auth-form" onSubmit={event => {
                        event.preventDefault();
                        //REGISTER BUSINESS POST REQUEST UTILS
                    }}>
                        <input id="bname" className="unit-input" type="text" placeholder="Enter business name" />
                        <input id="phone" className="unit-input" type="text" placeholder="Enter phone number" />
                        <input id="email" className="unit-input" type="text" placeholder="Enter business e-mail" />
                        <input id="password" className="unit-input" type="password" placeholder="Enter business password" />
                        <input id="confirm-password" className="unit-input" type="password" placeholder="Confirm password" />
                        <input id="address" className="unit-input" type="text" placeholder="Enter business address" />
                        <input id="city" className="unit-input" type="text" placeholder="Enter city" />
                        <input id="country" className="unit-input" type="text" placeholder="Enter country" />
                        <input id="open-days" className="unit-input" type="text" placeholder="Enter opening days" />
                        <input id="open-hours" className="unit-input" type="text" placeholder="Enter opening hours" />
                        <textarea id="descr" className="unit-input" name="descr" cols="22" rows="5" placeholder="Business description (5-10 lines)" />

                        <input className="unit-button" type="submit" value="Register" />
                    </form>
                </div>
            </div>
}