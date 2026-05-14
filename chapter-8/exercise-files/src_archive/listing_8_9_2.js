//An example after Listing 8.9 in React Quickly which looks at Event Handler Generators
//and curried functions

//Listing 8.9 showed us an event handler function. But say we have many buttons we want to produce
//we can abstract things further by making an event handler generator. This will do 
//listing 8.9's buttons - but will generate the buttons for us. 

import { useState } from "react";
function Counter() {
    const buttonStyle = {
        color: "blue",
        border: "1px solid",
        background: "transparent",
        borderRadius: ".25rem",
        padding: ".5em 1em",
        margin: ".5em"
    }
    const [counter, setCounter] = useState(0);
    const update = (delta) =>                                          //Generic function for updating counter with delta
        setCounter((c) => c + delta);               
    return (
        <>
            <h1>Value: {counter}</h1>
            <button style={buttonStyle} onClick={() => update(1)}>     {//Invokes update with two different values in the
                                                                        //event handler
            }
                Increment
            </button>
            <button style={buttonStyle} onClick={() => update(-1)}>     {//Invokes update with two different values in the 
                                                                        //event handler
            }
                Decrement
            </button>
        </>
    );
}

function App() {
    return <Counter />;
}

export default App;