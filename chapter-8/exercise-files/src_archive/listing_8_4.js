//Listing 8.4 from React Quickly Chapter 8 - Handling events in React

//Showcases event objects in event handlers - illustrated with a counter that increments or decrements our value based on the button pressed

import { useState, useRef } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    //Create a ref so we can access the HTML node
    const increment = useRef();

    /*In our single event handler, we compare the event target (this is a special property of the event object, which will get exposed using use ref), with
    the increment node. If it isn't that button, then it has to be the other one.
    
    We then set the delta correspondigly, and call that in setCounter - so it'll either add +1 or subtract -1.
    */
    const onClick = (evt) => {
        const delta = evt.target === increment.current ? 1 : -1;
        setCounter((value) => value + delta);
    };
    return (
        <section>
            <h1>Value: {counter}</h1>
            {//Assigns the same event handler to both buttons, but the ref is only to the increment button
            }
            <button ref={increment} onClick={onClick}>
                Increment
            </button>
            <button onClick={onClick}>
                Decrement
            </button>
        </section>
    );
}
function App() {
    return <Counter />;
}
export default App;