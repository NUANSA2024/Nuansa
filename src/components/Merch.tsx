import React from 'react';
import "../styles/NuansaMerch.css";

interface MerchProps {
  data: {
    id: number;
    merchName: string;
    price: number;
    merchImage: string;
  };
}

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
        </div>
    </div>
  );
};

export default Merch;
