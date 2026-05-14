//Similar to listing 8_9_2 but shows and uses a curried function to achieve the same effect
/*
In listing 8_9_2 we achieved our event handler generator by writing

const update = (delta) => setCounter((c) => c+ delta);
...
<button onClick={() => update(1 or -1)} 

Notice we're still calling a function that then calls update in the button (the =>). We can move the function definition
inside the update function with what's called a "curried" function. This then turns the update function itself
into an event handle generator. The change is going to be in both the lines stated above.
*/


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
    const update = (delta) => () =>                                    //Generic function for updating counter with delta
        setCounter((c) => c + delta);                                  //Note the extra () => 
    return (
        <>
            <h1>Value: {counter}</h1>
            {/*
            Because we curried the function in the update function definition, we can simply call 
            update without needing to wrap it in a function. 
            */}
            <button style={buttonStyle} onClick={update(1)}>     
                Increment
            </button>
            <button style={buttonStyle} onClick={update(-1)}>     
                Decrement
            </button>
        </>
    );
}

function App() {
    return <Counter />;
}

export default App;