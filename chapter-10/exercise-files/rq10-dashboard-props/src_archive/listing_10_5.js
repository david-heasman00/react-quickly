//Listing 10.5 from React Quickly - Counter component with reducer
//Introduction to the useReducer hook for complex states with an increment/decrement counter

import { useReducer } from "react";

//Creates a reducer function that takes the old state (the current value)
//and the action object, which has a type
function reducer(state, { type }) {
    switch (type) {
        case "INCREMENT":                                           //Returns old value plus or minus 1, depending on the type
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [counter, dispatch] = useReducer(reducer, 0);             //Initialises the hook with the reducer function and the initial value, 0
    return (
        <section>
            <h1>Counter: {counter}</h1>
            <div>
                {//Invokes the dispatch function with the relevant action objects
                }
                <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            </div>
        </section>
    );
}
function App() {
    return <Counter />;
}

export default App;