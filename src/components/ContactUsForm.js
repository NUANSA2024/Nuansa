// ContactForm.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactUsForm() {
  return (
    <div>
      <form action="https://formsubmit.co/nuansa.corprelations@gmail.com" method="POST">
        <input type="text" name="_honey" style={{ display: "none" }}></input>
        {/* <input type="hidden" name="_captcha" value="false"></input> */}
        <Typography sx={{ fontSize: "4vmax", fontFamily: "futura" }}> Interested in sponsoring us?</Typography>
        <Card style={{ backgroundColor: "#223f4f", maxWidth: 700 }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" }, InputLabelProps: { color: "white" } }} label="First Name" name="name" placeholder="Enter first name" variant="filled" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" } }} label="Last Name" placeholder="Enter Last name" name="Last Name" variant="filled" color="primary" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" } }} type="email" label="Email" name="email" placeholder="Enter Email" variant="filled" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" } }} type="tel" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', title: "Numbers Only, Max Length 12 Characters", maxLength: "12" }} label="Phone Number" name="Phone" placeholder="Enter Phone NUmber" variant="filled" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" } }} label="Message" name="Message" multiline
                  inputProps={{ style: { color: "white" } }} placeholder="Enter Message" variant="filled" fullWidth />
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="contained" color="primary" fullWidth> Send us an email</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default ContactUsForm;
