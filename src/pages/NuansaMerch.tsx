import React from "react";
import "../styles/NuansaMerch.css";
import "../fonts.css";
import TicketingForm from "../components/TicketingForm";
import backgroundImg from "../img/merch_background.png";
import { MERCH, BUNDLE } from "../components/MerchData";
import Merch from "../components/Merch";
import { BundleLeft, BundleRight } from "../components/Bundle";
import NavigationBar from "../components/NavigationBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function NuansaMerch() {
    const firstBundle = BUNDLE[0];
    const secondBundle = BUNDLE[1];

    const theme = createTheme({
        palette: {
          primary: {
            main: '#ED994F',
          },
        }
      });

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

                <div className="merch-info-container">
                    <h1>Merch sales are now open!</h1>
                    <h3>Click below to order now!</h3>
                    <ThemeProvider theme={theme}>
                    <Button variant="contained" startIcon={<AddShoppingCartIcon />} color="primary"
                    style={{
                        borderRadius: '25px',
                        margin: '10px'
                    }}>Order Now</Button>
                </ThemeProvider>
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
