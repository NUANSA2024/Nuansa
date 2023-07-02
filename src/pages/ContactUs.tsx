import React from "react";
import "../index.css";
import "../fonts.css";
function ContactUs() {
    return (
        <div id="wrapper">
            <h1
                style={{
                    fontFamily: "brixton",
                    position: "relative",
                    top: "30vh"
                }}
            >
                Contact Us!
            </h1>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    top: "30vh"
                }}
            >
                <img src="/message.png" className="image-contact"></img>
                <img src="/person.png" className="image-contact"></img>
                <img src="/phone.png" className="image-contact"></img>
            </div>
        </div>
    );
}

export default ContactUs;
