//Listing 8.2 from React Quickly Chapter 8 - Handling events in React

//Creates event using mousemove event 0 exploring the onMouseMove property in React

import { useState, useEffect } from "react";

function MouseStatus () {
    const [isMoving, setMoving] = useState(false);
    //Create local variable that's a function that sets the moving flag to true when invoked
    const onMouseMove = () => setMoving(true);
    useEffect(() => {
        if (!isMoving) return;
        const timeout = setTimeout(() => setMoving(false), 500);
        return () => clearTimeout(timeout);
    }, [isMoving]);
    return (
        <section onMouseMove={onMouseMove}>                                        {//This is the patttern for setting event listeners
                                                                                    //We tell React where the event listener is by assigning
                                                                                    //the function/local variable to the relevant property on our event
                                                                                    //Here - onMouseMove. In listing 8.1 - onClick. We just name the same
                                                                                    //For simplicity/convention
        }
            <h2>
                The mouse is {!isMoving && "not"} moving: {isMoving ? "✔" : "❌"}
            </h2>
        </section>
    );
}

function App() {
    return <MouseStatus />;
}

export default App;
