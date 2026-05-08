//Listing 8.1 from React Quickly Chapter 8 - Handling events in React

//Revisits simple click event listeners (that we've been using throughout the book)

import { useState } from "react";
function Counter() {
    //Create local variable which is a function, that will increment state value when invoked.
    const [counter, setCounter] = useState(0);
    const onClick = () =>                                               
        setCounter((value) => value + 1);
    return (
        <>
            <h1>Value: {counter}</h1>
            <button onClick={onClick}>Increment</button>                    {//Assign local variable onClick to the onClick property on the button
            }
        </>
    );                               
}
function App() {
    return <Counter />;
}
export default App;