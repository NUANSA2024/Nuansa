import React from "react";
import "../styles/NuansaMerch.css";
import "../fonts.css";
import TicketingForm from "../components/TicketingForm";
function NuansaMerch() {
    return (
        <div id="wrapper">
            <div className="App-header6">
            <div className="image-logo-container">
                <img src="/logo_keongmas_default.png" className="image-logo"></img>
            </div>
            <div className="image-seating-container">
                <img src="/Seating_Plan_Placeholder.jpg" className="image-seating"></img>
            </div>
            <div className="form-container">
                <TicketingForm/>
            </div>
        </div>
        </div>
    );
}

export default  NuansaMerch;
