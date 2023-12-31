import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "../styles/NavigationBar.css";
function NavigationBar() {
    return (
    <AppBar  position="fixed" sx={{ backgroundColor: 'black', height:'8vh' }}>
      <Container fixed sx={{ minWidth:"100vw" }}>
        <Toolbar disableGutters sx={{ color: 'black',display: "flex"}}>
        <div className="image_logo_navbar_container">
          <Box>
            <Tooltip title="NUANSA 2024">
                <a href="/">
                  <img className="image_logo_navbar"src="/Logo_Nuansa.png" />
                </a>
            </Tooltip>
          </Box>
          </div>
          <div style={{ flexGrow: 1 }}></div>
          <Typography
            component="a"
            href="/NuansaMerch"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Futura',
              fontWeight: 700,
              fontSize: '1vw',
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              padding: '0.5rem',
            }}
          >
            Merch
          </Typography>
          
          <Typography
            component="a"
            href="/NuansaTicketing"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Futura',
              fontWeight: 700,
              fontSize: '1vw',
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              padding: '0.5rem',
            }}
          >
            Ticketing
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;