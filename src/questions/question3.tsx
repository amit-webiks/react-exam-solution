import React, { useRef } from 'react';

const ColorChanger: React.FC = () => {

  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

 

  return (
    <div>
      <div style={{width:'100px', height:'100px', background:'black'}}></div>
    </div>
  );
};

export default ColorChanger;
