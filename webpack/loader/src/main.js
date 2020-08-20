import React, {useState} from 'react';

const getName = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Evan');
    },1000)
  })
}
const Main = ()=>{
  const [name, setName] = useState('');
  return(
    <div>
      <button onClick={async ()=>{
        const name = await getName();
        setName(name);
      }}>Get Name</button>
      Main page: {name}
    </div>
  )
}

export default Main;