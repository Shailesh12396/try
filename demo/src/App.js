import logo from './logo.svg';
import React, {useEffect,useRef} from 'react';
import './App.css';
import { FaBeer } from "react-icons/fa";
import lottie from 'lottie-web';
import Lottie from 'lottie-react';
import animationData from './Resources/check.json'

function App() {
  // const container=useRef(null);
  // useEffect(()=>{
  //   lottie.loadAnimation({
  //     container:container.current,
  //     renderer:'svg',
  //     loop:true,
  //     autoplay:true,
  //     animationData:requestAnimationFrame('./check.json')
  //   })
  // },[])
  return (
    <div className="App">
      <h3>
      Lets go for a <FaBeer />?
      
    </h3>
    
    <div>
        <Lottie height={40} animationData={animationData}/>
      </div>
      </div>
  );
}

export default App;
