//Listing 7.1 from React Quickly - A double-click counter with useState
//To eventually demo the use of useRef to preserve a value (in listing 7.1)

import { useState } from "react";
const THRESHOLD = 300;
function DoubleClickCounter() {
    const [counter, setCounter] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(null);               //Remember the time of the last click in a state value
    const onClick = () => {
        const isDoubleClick = Date.now() - lastClickTime < THRESHOLD;       //If the time since last click is less than 300ms, it's a double click
        if (isDoubleClick) {
            setCounter((value) => value + 1);                               //Increments the counter only if it's a double click
        } else {
            setLastClickTime(Date.now());                                   //Remembers the time of the current click if it's not a double click (cos hey, you might click again)
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

//While this works it isn't ideal - when setLastClickTime is called, React will re-render the component because a state value changes.
//Which means lots of needless re-renders, because the JSX isn't changing and the same DOM output is put to the screen. 
//A more optimum way is shown in listing 7.2, using useRef.