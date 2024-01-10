import React from 'react';
import "../styles/NuansaMerch.css";

interface BundleProps {
  data: {
    id: number;
    bundleName: string;
    price: number;
    bundleImage: string;
  };
}

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
            </div>
          </div>
          <div>
              <img src={bundleImage} />
          </div>
      </div>
    );
  };
