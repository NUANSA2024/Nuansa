// ContactForm.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const Categories = [
  { value: 'CAT 1', label: 'CAT 1' },
  { value: 'CAT 2', label: 'CAT 2' },
  { value: 'CAT 3', label: 'CAT 3' },
  { value: 'CAT 4', label: 'CAT 4' },
  { value: 'CAT 5', label: 'CAT 5' },
]
const Quantity =[
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10'},
]

function TicketingForm() {
  return (
    <div>
      <form action="https://formsubmit.co/nuansa.corprelations@gmail.com" method="POST">
        <input type="text" name="_honey" style={{ display: "none" }}></input>
        {/* <input type="hidden" name="_captcha" value="false"></input> */}
        <Typography sx={{ fontSize: "4vmax", fontFamily: "futura" }}> EXPERIENCE THE EXTRAORDINARY</Typography>
        <Card style={{ backgroundColor: "#223f4f", maxWidth: 700 }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" }, InputLabelProps: { color: "white" } }} label="Name" name="name" placeholder="Enter first name" variant="filled" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" } }} type="email" label="Email" name="email" placeholder="Enter Email" variant="filled" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f", input: { color: "white" } }} type="tel" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', title: "Numbers Only, Max Length 12 Characters", maxLength: "12" }} label="Phone Number" name="Phone" placeholder="Enter Phone NUmber" variant="filled" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f",
                '& .MuiInputBase-input': {
                    color: 'white', // Change this to your desired text color
                    textAlign: 'left',
                  },}}
                  select defaultValue="" label="Category" name="Category" placeholder="CAT 1" variant="filled" fullWidth required>
                  {Categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))} </TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ border: '2px solid white', bgcolor: "#223f4f",
                '& .MuiInputBase-input': {
                    color: 'white', // Change this to your desired text color
                    textAlign: 'left',
                  },}}
                  select defaultValue="" label="Quantity" name="Quantity" placeholder="CAT 1" variant="filled" fullWidth required>
                  {Quantity.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))} </TextField>
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

export default TicketingForm;
