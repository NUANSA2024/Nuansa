import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/NUANSAVideo.css';

const CustomDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#ed994f', // Set background color here
}));

const NUANSAVideo: React.FC = () => {
  return (
    <CustomDiv>
        <h2 className="header-video">
                    A GLIMPSE INTO NUANSA
                </h2>
      <div>
        <ReactPlayer
          url="https://drive.google.com/uc?export=download&id=1Qljw12HIJ-A1SbpHZC1kPmyuukGsytEV" // Updated link
          controls={true}
          width="70%"
          height="auto"
        />
      </div>
    </CustomDiv>
  );
}

export default NUANSAVideo;
