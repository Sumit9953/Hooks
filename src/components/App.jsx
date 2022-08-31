import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }
  function Decrease() {
    setcount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={Decrease}>-</button>
    </div>
  );
}

export default App;
