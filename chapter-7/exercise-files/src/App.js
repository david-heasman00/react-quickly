//Listing 7.2 from React Quickly - A double click counter with useRef
//By using useRef instead of useState to store lastClickTime we can skip an entire cycle of rendering and be more performant

import { useState, useRef } from "react";
const THRESHOLD = 300;

function DoubleClickCounter() {
    const [counter, setCounter] = useState(0);
    const lastClickTime = useRef(null);                             //Remembers the time of the last click in a useRef value
    const onClick = () => {
        //Performs the same check as in listing 7.1 - but is now accessed using .current
        const isDoubleClick = 
            Date.now() - lastClickTime.current < THRESHOLD; 
        if (isDoubleClick) {
            setCounter((value) => value + 1);
        } else {
            lastClickTime.current = Date.now();                    //Updates the current value of the state through the .current property
        }
    };
    return (
        <main>
            <p>Counter: {counter}</p>
            <button onClick={onClick}>Increment</button>
        </main>
    );
}

function App() {
    return <DoubleClickCounter />;
}

export default App;