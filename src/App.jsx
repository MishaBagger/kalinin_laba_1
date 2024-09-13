import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    function clickHandler() {
      setCount(count + 1);
    }
    return (
      <div>
        
        <span>{count}</span> <button onClick={clickHandler}>+</button>
      </div>
    );
  }
  
export default App;
