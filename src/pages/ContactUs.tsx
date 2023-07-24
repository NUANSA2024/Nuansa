import React from "react";
import "../index.css";
import "../fonts.css";
import "../styles/ContactUs.css";
import "../styles/ContactUsForm.css";
import { Link } from "react-router-dom";
import {Card, Typography, CardContent, TextField, Grid, Button} from "@mui/material";
function ContactUs() {
    return (
        <div id="wrapper" className="container-all-contact">
            <div>
                <h1 className="header-nuansa-contact"
                >
                    Contact Us!
                </h1>
                <div className="images">
                    <h2>
                        <Link to="https://m.facebook.com/nuansa.culturalproductions">
                    <img src="/message.png" className="message"></img>
                    </Link>
                    <Link to="http://instagram.com/nuansacp">
                    <img src="/person.png" className="person"></img>
                    </Link>
                    <img src="/phone.png" className="phone"></img>
                    </h2>
                </div>
            </div>
            <div>
                <Card className="Contact-form">
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField sx={{bgcolor: "white" }} label="First Name" placeholder="Enter first name" variant="filled" fullWidth required/>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField sx={{bgcolor: "white" }} label="Last Name" placeholder="Enter Last name" variant="filled" color="primary" fullWidth required />
                            </Grid>
                            <Grid xs={12}item>
                                <TextField sx={{bgcolor: "white" }} type="email" label="Email" placeholder="Enter Email" variant="filled" fullWidth required />
                            </Grid>
                            <Grid xs={12}item>
                                <TextField sx={{bgcolor: "white" }} type="number" label="Phone Number" placeholder="Enter Phone NUmber" variant="filled" fullWidth required />
                            </Grid>
                            <Grid xs={12}item>
                                <Button type="submit" variant="contained" color="primary" fullWidth> Send us an email</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}

export default ContactUs;
