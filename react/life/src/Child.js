import React, { useState } from 'react';
function Child({parentCount}){
  const [inx, setInx] = useState(1);

  return (
    <div id={'parent'}  data-a={parentCount}>
      <div>{'Child count: ' + inx} {'ParentCount count: ' + parentCount}</div>
      <button onClick={()=>{
        setInx(inx+1);
      }}>Child Click</button>
    </div>
  )
}

export default Child;