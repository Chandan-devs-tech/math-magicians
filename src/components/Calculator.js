import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import '../styles/Calculator.css';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = result;
  const handleClick = (e) => {
    const val = e.target.textContent;
    setResult(calculate(result, val));
  };
  return (
    <>
      <div className="calcText">
        <h2>Let&apos;s do some math!</h2>
        <div className="calc">
          <div className="input">{next || total || operation || 0}</div>
          <div className="row">
            <Button text="AC" handleClick={handleClick} />
            <Button text="+/-" handleClick={handleClick} />
            <Button text="%" handleClick={handleClick} />
            <Button text="÷" handleClick={handleClick} />
          </div>
          <div className="row">
            <Button text="7" handleClick={handleClick} />
            <Button text="8" handleClick={handleClick} />
            <Button text="9" handleClick={handleClick} />
            <Button text="x" handleClick={handleClick} />
          </div>
          <div className="row">
            <Button text="4" handleClick={handleClick} />
            <Button text="5" handleClick={handleClick} />
            <Button text="6" handleClick={handleClick} />
            <Button text="-" handleClick={handleClick} />
          </div>
          <div className="row">
            <Button text="1" handleClick={handleClick} />
            <Button text="2" handleClick={handleClick} />
            <Button text="3" handleClick={handleClick} />
            <Button text="+" handleClick={handleClick} />
          </div>
          <div className="row">
            <Button text="0" handleClick={handleClick} />
            <Button text="." handleClick={handleClick} />
            <Button text="=" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
