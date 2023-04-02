import React from "react";
import './components/styles/calculator.css';
import Calculator from "./components/Calculator";

const App = () => (
  <div className="container">
     <div className="calculator-title">Lets Calculate</div>
    <Calculator />
  </div>
);

export default App;
