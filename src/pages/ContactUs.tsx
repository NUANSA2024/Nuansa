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
            <div>
                <form action="https://formsubmit.co/nuansa.corprelations@gmail.com" method="POST">
                    <input type="text" name="_honey" style={{display:"none"}}></input>
                    {/* <input type="hidden" name="_captcha" value="false"></input> */}
                    <Typography sx={{fontSize: "4vmax", fontFamily: "futura"}}> Interested in sponsoring us?</Typography>
                        <Card style={{backgroundColor: "#223f4f",maxWidth:1000}}>
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField sx={{border: '2px solid white',bgcolor: "#223f4f", input:{color:"white"} , InputLabelProps:{color:"white"} }} label="First Name" name="name" placeholder="Enter first name" variant="filled" fullWidth required/>
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField sx={{border: '2px solid white',bgcolor: "#223f4f", input:{color:"white"} }}  label="Last Name" placeholder="Enter Last name" name="Last Name" variant="filled" color="primary" fullWidth required />
                                    </Grid>
                                    <Grid xs={12}item>
                                        <TextField sx={{border: '2px solid white',bgcolor: "#223f4f", input:{color:"white"}  }} type="email" label="Email" name="email" placeholder="Enter Email" variant="filled" fullWidth required />
                                    </Grid>
                                    <Grid xs={12}item>
                                        <TextField sx={{border: '2px solid white',bgcolor: "#223f4f", input:{color:"white"}  }} type="tel" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', title:"Numbers Only, Max Length 12 Characters", maxLength:"12" }}  label="Phone Number" name="Phone" placeholder="Enter Phone NUmber"  variant="filled" fullWidth required
                                         />
                                    </Grid>
                                    <Grid xs={12}item>
                                        <TextField sx={{border: '2px solid white',bgcolor: "#223f4f", input:{color:"white"}  }} label="Message" name="Message" multiline
                                            inputProps={{ style: { color: "white" } }} placeholder="Enter Message" variant="filled" fullWidth />
                                    </Grid>
                                    <Grid xs={12}item>
                                        <Button type="submit" variant="contained" color="primary" fullWidth> Send us an email</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
