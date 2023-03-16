import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={incrementCount}>Count: {count}</button>
    </div>
  );
}

export default App;
