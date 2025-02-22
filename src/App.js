import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lusaka" />
       
        <footer>This project was coded by Iza Nalondwa
          
        , is{" "}
          <a
            href="https://github.com/Nalondwa/final-react-weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://mellow-sopapillas-6f5f27.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>  
          
          
        
          </footer>
      </div>
      </div>
  );
}