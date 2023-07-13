import React from 'react';
import Button from './Button';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calc">
      <input type="number" className="input" />
      <div className="row">
        <Button text="AC" />
        <Button text="+/-" />
        <Button text="%" />
        <Button text="/" />
      </div>
      <div className="row">
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" />
      </div>
      <div className="row">
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />
      </div>
      <div className="row">
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" />
      </div>
      <div className="row">
        <Button text="0" />
        <Button text="." />
        <Button text="=" />
      </div>
    </div>
  );
}

export default Calculator;
