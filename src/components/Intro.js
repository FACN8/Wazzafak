import React from "react";

export default props => {
    return <div className="component-container">
        <div className="unit-item">
            <h1 className="page-title">Welcome to Wazzafak</h1>
            <p className="page-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
            <a href="/register"><button className="unit-button">I already have an acount</button></a>
            <a href="/login"><button className="unit-button">Login</button></a>
            <a href="/blogin">I am a business</a>
        </div>
    </div>
}