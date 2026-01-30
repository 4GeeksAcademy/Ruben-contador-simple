import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let minutes=0
let hours=0
let seconds=0;

const root=ReactDOM.createRoot(document.getElementById('root'))

const interval= setInterval(()=>{
seconds++;
  if(seconds>59){
    seconds=0;
    minutes++;
  }
  if(minutes>59){
    minutes=0;
    hours++
  };

  let data=[hours,minutes,seconds];

root.render(
  <React.StrictMode>
    <Home contador={data}/>
  </React.StrictMode>,
)
},1000)
