import React from 'react';
import "../styles/NuansaMerch.css";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface MerchProps {
  data: {
    id: number;
    merchName: string;
    price: number;
    merchImage: string;
  };
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#ED994F',
      },
    }
  });

const Merch: React.FC<MerchProps> = (props) => {
  const { id, merchName, price, merchImage } = props.data;

  return (
    <div className='merch'>
        <img src={merchImage} />
        <div className='description'>
            <p style={{
                fontSize: '26px',
                lineHeight: '10px'
            }}>
                <b>{merchName}</b>
            </p>
            <p style={{
                fontSize: '22px',
                lineHeight: '10px'
            }}>${price}</p>
            <ThemeProvider theme={theme}>
                {/* TODO: Add cart functionality */}
                <Button variant="contained" startIcon={<AddShoppingCartIcon />} color="primary"
                style={{
                    borderRadius: '25px',
                    margin: '10px'
                }}>Add To Cart</Button>
            </ThemeProvider>
        </div>
    </div>
  );
};

export default Merch;
