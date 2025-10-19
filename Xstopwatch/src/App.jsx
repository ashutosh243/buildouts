import React, { useEffect, useRef, useState } from 'react';


const App=()=> {

  const [Timer,setTimer]=useState(0);
  const [running,setRunning]=useState(false);
  const id=useRef();
   
  const handletoggle=()=>{
    setRunning((prev)=>{return !prev});
  }

  useEffect(()=>{
    const handleStartStop=()=>{
    if(running)
    {
        id.current=setInterval(()=>{
          setTimer((prev)=>{return prev+1});
        },1000);
    }
    else
    {
         clearInterval(id.current);
    }
  }
  handleStartStop();
  },[running]);

  const handleReset=()=>{
    setTimer(()=>{return 0 });
    setRunning(false);
  }
  return (<>    
    <h1>Stopwatch</h1>
    <div>Time:{Math.floor(Timer/60)}:{Math.floor(Timer%60)<10?'0'+Math.floor(Timer%60):Math.floor(Timer%60)}</div>
    <button onClick={handletoggle}>{running==true?"Stop":"Start"}</button>
    <button onClick={handleReset}>Reset</button>
  </>);
}
export default App;