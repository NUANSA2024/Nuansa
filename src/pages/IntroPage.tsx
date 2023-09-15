import React from "react";
import "../styles/IntroPage.css";
import "../fonts.css";
import Button from '@mui/material/Button';
import axios from 'axios';

const backendUrl = 'http://localhost:3001';

function IntroPage() {
    return (
        <div id="wrapper" style={{ display: "flex" }}>
            <div className = "text-intro-container">
                <h1 className="text-intro">
                    NUANSA
                    <br />
                    2024
                </h1>
            </div>
            <div className="image-intro-container">
                <img src="/first_page.png" className="image-intro"></img>
            </div>
            <div>
                <Button variant="contained" onClick={
                    async () => {
                        try {
                            const response = await axios.get(`${backendUrl}/read-emails`, {
                                params: {
                                    email: 'hieronimusbrandon@gmail.com'
                                }
                            });
                            console.log('frontend response');
                            console.log(response);
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }> </Button>
            </div>
        </div>
    );
}

export default IntroPage;
