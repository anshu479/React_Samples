import { useState } from "react";

function Counter() {
  let [arr, setarr] = useState([]);
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(--count);
  };
  const capture = () => {
    setarr([...arr, count]);
  };

  return (
    <div>
      <p> counter: {count}</p>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement</button>
      <button onClick={capture}>capture </button>
      <ul>
        {arr.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default Counter;
