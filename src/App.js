import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(props) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleMinusClick = () => {
    setStep(step - 1);
  };
  const handleAddClick = () => {
    setStep(step + 1);
  };

  const handleMinusCountBtn = () => {
    setCount(count - step);
  };
  const handleAddCountBtn = () => {
    setCount(count + step);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleResetBtn = () => {
    setCount(0);
    setStep(1);
  };

  const formatDate = date.toLocaleString();
  return (
    <div>
      <div>
        <button onClick={handleMinusClick}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleAddClick}>+</button>
      </div>
      <div>
        <button onClick={handleMinusCountBtn}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleAddCountBtn}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span> {formatDate}</span>
      </p>
      <button onClick={handleResetBtn}>reset</button>
    </div>
  );
}

export default App;
