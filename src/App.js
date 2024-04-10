import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route } from "react-router-dom";
import Header from './conponents/header';
import Home from './conponents/home';
import About from './conponents/about';
import Skills from './conponents/skills';
import Projects from './conponents/projects';
import Contact from "./conponents/contact"
import Foot from './conponents/foot';
import Loading from './conponents/loading';
import { useEffect, useState } from 'react';
import sound from './sound.mp3';
import './App.css';
function App() {
  let [isLoading,setIsLoading] = useState(true)
  let playAudio=()=>{
    const clickSound = new Audio(sound);
    clickSound.play().catch(function (error) {
      console.log("Chrome cannot play sound without user interaction first")
    });
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      playAudio()
    }, 1000);
    setInterval(() => {
      playAudio()
    }, 60000);
  }, []);
  return (
      <div className='overflow-hidden'>
        {
          isLoading ? ( <Loading />) : ( 
          <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Foot/>
        </div>
        )}
    </div>
  );
}
export default App;
