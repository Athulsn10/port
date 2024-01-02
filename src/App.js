import React, { createContext,useState } from 'react';
import ReactSwitch from 'react-switch';
import './App.css';
import Project from './Project';
import Resume from './Resume';
import Other from './Other';
import Home from './Home';;

export const ThemeContext = createContext(null);
function App() {
  const sun = './sun.png'
  const moon = "./moon.png"
  const [theme, setTheme] = useState("light")
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  }
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='App ' id={theme}>
        <div className='z-2 switch w-100  d-flex justify-content-end'>
          <div className="switch me-4">
            <div class="theme-container shadow-dark rounded-circle" style={{backgroundColor:'black'}}>
              <img className='m-2' width={30} onClick={toggleTheme} checked={theme === "dark"} id="theme-icon" src={theme === 'dark' ? sun : moon} alt="ERR"/>
            </div>
          </div>
        </div>
        <Home/>
        <Project/>
        <Resume/>
        <Other/>
        <hr/>
        <section id="end">
          <div className="container-fluid">
            <h1 style={{ overflowY: 'hidden' }} className="head text-center my-5 fs-1 fw-bold">
              You Have Reached The End. Thank You! <i className="icon fa-solid fa-heart" ></i>
            </h1>
          </div>
        </section>
      </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
