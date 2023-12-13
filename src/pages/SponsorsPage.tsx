import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import "../styles/SponsorsPage.css";

const sponsors = {
  platinum: [
    { id: 1, logo: 'PSALogo Horiz_2D.jpg' }
    // Add more platinum sponsors here
  ],
  gold: [
    { id: 1, logo: 'logo mandiri.png' },
    { id: 2, logo: 'Logo_dv.png'},
    // Add more gold sponsors here
  ],
  silver: [
    { id: 1, logo: 'LOGO Wardaya College High resss.png' },
    { id: 2, logo: 'LOGO_DCAM-removebg.png' },
    { id: 3, logo: 'BISA Logo.jpg'},
    { id: 4, logo: 'biru .png'},
    { id: 5, logo: 'Logo_CBS.png'},
    { id: 6, logo: 'Logo_rayspeed.png'}
    // Add more silver sponsors heres
  ],
};

const SponsorPage: React.FC = () => {
  const paperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    height: '100%', // Ensure the Paper component takes full height
  };

  const imgStylegold = {
    width: 'auto', // Adjust the maximum width as needed
    height: '30vh',
    display: 'block',
    margin: 'auto', // Center the image within the Paper component
  };
  const imgStylesilver = {
    width: 'auto', // Adjust the maximum width as needed
    height: '20vh',
    margin: 'auto', // Center the image within the Paper component
  };
  const imgStylebronze = {
    maxWidth: 'auto', // Adjust the maximum width as needed
    height: '10vh',
    margin: 'auto', // Center the image within the Paper component
  };
  const tierSpacer = {
    paddingBottom: '10vh', // Adjust the space between tiers as needed
  };
  return (
    <div id='wrapper'>
      {/* Platinum Sponsors */}
      <div className="header-sponsor">
      <h2> Our Sponsors </h2>
      </div>
      <Grid container spacing={3} justifyContent="center" style={tierSpacer}>
      
        {sponsors.platinum.map((sponsor) => (
          <Grid item xs={6} sm={4} md={3} key={sponsor.id}>
            <Paper style={paperStyle}>
              <img src={sponsor.logo} alt={`Sponsor ${sponsor.id}`} style={imgStylegold} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Gold Sponsors */}
      <Typography variant="h4" align="center" gutterBottom>
             
      </Typography>
      <Grid container spacing={70} justifyContent="center" style={tierSpacer}>
      
        {sponsors.gold.map((sponsor) => (
          <Grid item xs={6} sm={4} md={3} key={sponsor.id}>
            <Paper style={paperStyle}>
              <img src={sponsor.logo} alt={`Sponsor ${sponsor.id}`} style={imgStylesilver} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Silver Sponsors */}
      <Typography variant="h4" align="center" gutterBottom>
        
      </Typography>
      <Grid container spacing={3} justifyContent="center" style={tierSpacer}>
        {sponsors.silver.map((sponsor) => (
          <Grid item xs={6} sm={4} md={2} key={sponsor.id}>
            <Paper style={paperStyle}>
              <img src={sponsor.logo} alt={`Sponsor ${sponsor.id}`} style={imgStylebronze} />
            </Paper>
          </Grid>
        ))}
      </Grid> 
    </div>
  );
}

export default SponsorPage;
