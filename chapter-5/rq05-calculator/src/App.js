import { useState } from "react";

//Define operations
const PLUS = (a, b) => a + b;
const MINUS = (a, b) => a - b;
const PRODUCT = (a, b) => a * b;

//Calculator function
function Calculator({ a, b}) {
  const [operator, setOperator] = useState(() => PLUS);       //Initialize state with a function defaulting to the PLUS operator
  return(
    <main>
      <h1>Calculator</h1>
      <button onClick={() => setOperator(() => PLUS)}         //Update state with function returning clicked operator function
                                                              //Also note use of function wrapping - otherwise will return NaN
      >
        Plus
      </button>
      <button onClick={() => setOperator(() => MINUS)}>
        Minus
      </button>
      <button onClick={() => setOperator(() => PRODUCT)}>
        Multiply
      </button>
      <p>
        Result of applying operator to {a} and {b}:           {//Can call the state values as a functio, because the function wrapping
                                                              //earlier means we've made sure its always returned as a function.
        }
        <code>{operator(a, b)}</code>
      </p>
    </main>
  );
}
function App() {
  return <Calculator a={10} b={3} />;
}
export default App;
