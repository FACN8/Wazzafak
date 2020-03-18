import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default props => {
    return (cookies.get('user')) ? window.location.href = "/vacancies" :
        (cookies.get('buser')) ? window.location.href = "/bvacancies" :
            <div className="component-container">
                <div className="intro-page">
                    <h1 className="page-title">Welcome to Wazzafak</h1>
                    <p className="page-description">Welcome to Wazzafak, we're here to help you find your next local job. Our platform provides you with job opportunities based on your skills, preferences, location and experience!</p>
                    <a href="/login"><button className="unit-button">I already have an account</button></a>
                    <a href="/register"><button className="unit-button">Create a new account</button></a>
                    <a href="/blogin">I am a business</a>
                </div>
            </div>;
}