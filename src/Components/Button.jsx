import { useState } from "react";
function Button() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        REDUCE
      </button>
      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
}
export default Button;

// here setCount is the function to update the value
// react use state takes initial arguments
//get state and update state
//[value, updator function] = useState(0)
