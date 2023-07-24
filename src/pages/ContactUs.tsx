import React from "react";
import "../index.css";
import "../fonts.css";
import "../styles/ContactUs.css";
import { Link } from "react-router-dom";
function ContactUs() {
    return (
        <div id="wrapper">
            <h1 className="header-nuansa-contact"
            >
                Contact Us!
            </h1>
            <div className="images">
                <h2>
                    <Link to="https://www.youtube.com/watch?v=wKRL7vkWMoc&ab_channel=TheFatRat">
                <img src="/message.png" className="message"></img>
                </Link>
                <img src="/person.png" className="person"></img>
                <img src="/phone.png" className="phone"></img>
                </h2>
            </div>
        </div>
    );
}

export default ContactUs;
