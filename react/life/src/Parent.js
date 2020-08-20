import React, { useState } from 'react';
import Child from './Child';
function Parent(){
  const [inx, setInx] = useState(1);

  return (
    <div id={'child'}>
      <div>{'count: ' + inx}</div>
      <button onClick={()=>{
        setInx(inx+1);
      }}>Parent Click</button>
      <p>>>>>>>>>>>>>>>>>>>>>>></p>
      <Child parentCount={inx}/>
    </div>
  )
}

export default Parent;