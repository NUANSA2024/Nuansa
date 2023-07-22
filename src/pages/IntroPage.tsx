import React from "react";
import "../styles/IntroPage.css";
import "../fonts.css";
function IntroPage() {
    return (
        <div id="wrapper" style={{ display: "flex" }}>
          <div style = {{left:"20vw"}}></div>
            <div>
                <h1
                    className = "child"
                    style={{
                        lineHeight: "1",
                        fontFamily: "aloja",
                        textAlign: "left"
                    }}
                >
                    <br />NUANSA<br />2024
                </h1>
            </div>
            <div className="image-intro-container">
                <img
                    src="/first_page.png"
                    className="image-intro"
                ></img>
            </div>
        </div>
    );
}

export default IntroPage;
