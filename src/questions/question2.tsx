import React, { useState } from 'react';

function ToggleDiv() {
  const [showDiv, setShowDiv] = useState(true)
  const handleClick = ()=>{
    setShowDiv(prev=> !prev)
  }

  return (
    <div>
      <button onClick={()=> handleClick()}>click to {showDiv? "hide": "show"}</button>
      {showDiv && <div>This is the Div</div>}
       
    </div>
  );
}

export default ToggleDiv;
