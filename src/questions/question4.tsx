import { useState } from "react";

function ColoredDivs() {
  const [colorArr, setColorArr] = useState<string[]>(["red", "blue"])
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const addDiv = () => {
    const randomColor = getRandomColor()
    setColorArr(prev => [...prev, randomColor])
  }
  const deleteAll = () => {
    setColorArr([])
  }

  return (
    <>
      {
        colorArr.map((color, index) => {
          return ( <div key={index} style={{width:'100px', height:'100px', background:color }}></div>)
        })
      }

      <button onClick={addDiv}>add div</button>
      <button onClick={deleteAll}>delete all</button>
    </>
  );
}

export default ColoredDivs;

