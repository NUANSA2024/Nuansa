import React from "react";
import "../index.css";
import "../fonts.css";
import "../styles/ContactUs.css";
import "../styles/ContactUsForm.css";
import { Link } from "react-router-dom";
import {Card, Typography, CardContent, TextField, Grid, Button} from "@mui/material";
import CopyEmail from "../components/CopyEmail";
import ContactUsForm from "../components/ContactUsForm";

function ContactUs() {
    return (
        
        <div id="wrapper" className="container-all-contact">
            <div className="container-header-logos">
                <h1 className="header-nuansa-contact"
                >
                    Contact Us!
                </h1>
                <div className="container-images">
                    <div>
                        <Link to="https://m.facebook.com/nuansa.culturalproductions">
                    <img src="/facebook.png" className="image-facebook"></img>
                    </Link>
                    </div>
                    <div>
                    <Link to="http://instagram.com/nuansacp">
                    <img src="/instagram.png" className="image-instagram"></img>
                    </Link>
                    </div>
                </div>
                <CopyEmail />
            </div>
                <ContactUsForm />
        </div>
    );
}

export default ContactUs;
