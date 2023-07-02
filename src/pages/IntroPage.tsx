import React from "react";
import "../index.css";
import "../fonts.css";
function IntroPage() {
    return (
        <div id="wrapper" style={{ fontFamily: "cursive", display: "flex", alignItems:"center", width: "100%"}}>
          <div style = {{width: "200px"}}></div>
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
            <div style={{height: "100%", width: "100%", textAlign: "right"}}>
                <img
                    src="/first_page.png"
                    className="child"
                    style={{
                      height: "120vh",
                      width: "40vw",
                      objectFit: "cover",
                      objectPosition: "top"
                    }}
                ></img>
            </div>
        </div>
    );
}

export default IntroPage;
