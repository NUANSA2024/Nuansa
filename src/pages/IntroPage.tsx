import React from "react";
import "../styles/IntroPage.css";
import "../fonts.css";
function IntroPage() {
    return (
        <div id="wrapper" style={{ display: "flex" }}>
            <div>
                <h1 className="text-intro-container">
                    NUANSA
                    <br />
                    2024
                </h1>
            </div>
            <div className="image-intro-container">
                <img src="/first_page.png" className="image-intro"></img>
            </div>
        </div>
    );
}

export default IntroPage;
