import React from 'react';
import "../styles/NuansaMerch.css";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface BundleProps {
  data: {
    id: number;
    bundleName: string;
    price: number;
    bundleImage: string;
  };
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#ED994F',
      },
    }
  });

export const BundleLeft: React.FC<BundleProps> = (props) => {
  const { id, bundleName, price, bundleImage } = props.data;

  return (
    <div className='bundle'>
        <div>
            <img src={bundleImage} />
        </div>
        <div className='description-container'>
            <div className='description'>
                <p style={{
                    fontSize: '26px',
                    lineHeight: '10px'
                }}>
                    <b>{bundleName}</b>
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
    </div>
  );
};

export const BundleRight: React.FC<BundleProps> = (props) => {
    const { id, bundleName, price, bundleImage } = props.data;
  
    return (
      <div className='bundle'>
          <div className='description-container'>
            <div className='description'>
              <p style={{
                  fontSize: '26px',
                  lineHeight: '10px'
              }}>
                  <b>{bundleName}</b>
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
          <div>
              <img src={bundleImage} />
          </div>
      </div>
    );
  };
