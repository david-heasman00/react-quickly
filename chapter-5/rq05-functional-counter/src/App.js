import { useState } from "react";
function Counter({ start }) {                           //Property passed to this component is named start
  const [counter, setCounter] = useState(start);        //We use that property to initiliase our state
  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(value => value +1)}>
        Increment
      </button>
    </main>
  );
}

//Call three instances of counter with three different start values
function App() {
  return (        
    <>
      <Counter start={0} />                             
      <Counter start={123} />
      <Counter start={-64} />
    </>
  );
}
export default App;