import { useState } from "react";
import "./styels.scss";
const UseStateWork = () => {
  const [count, setCount] = useState(5);
  function increment() {
    setCount((previousCount) => previousCount + 1);
  }
  function decrement() {
    setCount((previousCount) => previousCount - 1);
  }
  return (
    <div className="stateMain">
      <h1>Use state working</h1>
      <div className="operation-block">
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default UseStateWork;
