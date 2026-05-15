//Listing 8.11 from React Quickly Chapter 8 - Transition Events
/*
Adding event listeners to unsupported HTML events (by using useRef). 
Here we add listeners to CSS transition events, of which only 1/4 of the transition events are 
available to React. (onTransitionEnd). We'll use useRef to listen to the other transition events.
*/

import { useState, useRef, useEffect } from "react";

function Transition() {
    const [isRunning, setRunning] = useState(false);
    const div = useRef();                                                           //We're going to need to reference an HTML element - so we use the useRef hook
    useEffect(() => {
        
        //Creates two callbacks inside the effect hook to use as listeners
        const onStart = () => setRunning(true);
        const onEnd = () => setRunning(false);

        //We need a local variable that points to the DOM element so we can access it in the cleanup function
        const node = div.current;

        //Adds the listeners in the effect hook directly on the DOM element
        node.addEventListener("transitionstart", onStart);
        node.addEventListener("transitionend", onEnd);

        //Removes the same listeners from the same object on cleanup (which is why we defined node=div.current)
        return() => {
            node.removeEventListener("transitionstart", onStart);
            node.removeEventListener("transitionend", onEnd);
        };
    }, [setRunning]);
    return (
        <section>
            <h1>Transition is {!isRunning && "not"} running</h1>
            <div
                style={{ color: "red", transition: "color is linear" }}
                ref={div}                                                           //Sets the ref property on our target element - this is the HTML element in the DOM we want.
            >
                COLORFUL TEXT
            </div>
            <button onClick={() => div.current.style.color = "blue"}>
                Go blue
            </button>
            <button onClick={() => div.current.style.color = "red"}>
                Go red
            </button>
        </section>
    );
}
function App() {
    return <Transition />;
}
export default App;
