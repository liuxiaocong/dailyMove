import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import util from './util';
import config from './config';
import CircleTest from './circleTest';
import Mobile from './Mobile';

const MemoMobile = React.memo(Mobile);

function App() {
  const [inx, setInx] = useState(1);
  const [str, setStr] = useState('<script type="text/javascript">alert(1)</script>');
  let Cop;

  if(document.body.clientWidth <= 600){
    Cop = require('./Mobile.js').default;
  }else {
    Cop = require('./PC.js').default;
  }
  //console.log(Mobile);
  //console.log(Cop);
  //console.log(CircleTest);
  console.log(document.body.clientWidth);
  console.log(document.getElementById('div'));
  return (
    <div className="App">
      <Test />
      App
      <button
        onClick={()=>{
          setInx(inx+1);
          util.a++;
        }}
      >Update:{inx}</button>
      <div id={'div'}>Div</div>
      <CircleTest />
      <Mobile />
      <MemoMobile />
      <Cop />
      {str}
    </div>
  );
}

export default App;
