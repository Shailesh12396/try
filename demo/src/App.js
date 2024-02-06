import logo from './logo.svg';
import React, {useEffect,useRef} from 'react';
import './App.css';
import { FaBeer } from "react-icons/fa";
import lottie from 'lottie-web';
import Lottie from 'lottie-react';
import animationData from './Resources/check.json'
import Checks from './Resources/Check'
function App() {

  return (
    // <div className="App">
    //   <h3>
    //   Lets go for a <FaBeer />?
      
    // </h3>
    
    // <div>
    //     <Lottie height={40} animationData={animationData}/>
    //   </div>
    //   </div>

      <Checks/>
  );
}

export default App;
