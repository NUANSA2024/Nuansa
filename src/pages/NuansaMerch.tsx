import React from "react";
import "../styles/NuansaMerch.css";
import "../fonts.css";
import TicketingForm from "../components/TicketingForm";
import backgroundImg from "../img/merch_background.png";
import { MERCH, BUNDLE } from "../components/MerchData";
import Merch from "../components/Merch";
import { BundleLeft, BundleRight } from "../components/Bundle";
import NavigationBar from "../components/NavigationBar";

function NuansaMerch() {
    const firstBundle = BUNDLE[0];
    const secondBundle = BUNDLE[1];

    return (
        <div id="wrapper" style={{ 
            backgroundColor: 'transparent',
            backgroundImage: `url(${backgroundImg})`, 
            backgroundSize: "cover", 
            height: '2253px',
            backgroundPosition: 'center',
        }} >
            <div className="App-header6">
                <NavigationBar />
                <div className="image-logo-container">
                    <img src="/logo_keongmas_default.png" className="image-logo"></img>
                </div>
                <div className="merch-container">
                    {MERCH.map((merch) => (
                        <Merch data ={merch}/>
                    ))}
                </div>
                <div className="bundle-container">
                    <BundleLeft data={firstBundle} />
                    <BundleRight data={secondBundle} />
                </div>
            </div>
        </div>
    );
}

export default NuansaMerch;
