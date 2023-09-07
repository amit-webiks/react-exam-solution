import React, { useRef } from 'react';

const ColorChanger: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null)

  const getRandomColor = (): string => {

    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

 
  const handleClick = ()=>{
    let randomColor =  getRandomColor()
    if(divRef.current){
      divRef.current.style.backgroundColor = randomColor
    }
  }
  return (
    <div>
      <button onClick={handleClick}>click me to change color</button>
      <div ref={divRef} style={{width:'100px', height:'100px', background:'black'}}></div>
    </div>
  );
};

export default ColorChanger;
