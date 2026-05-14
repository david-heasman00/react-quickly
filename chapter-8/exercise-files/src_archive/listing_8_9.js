//Listing 8.9 from React Quickly Chapter 8 - Styled Counter
/*
Introducing reusable UI elements - creating a stylised generalized button component that can be reused over and over

To do this our button component function takes a property - handleClick
*/

import { useState } from "react";
function Button({ handleClick, label }) {                                           //handleClick prop will be taken...
    const buttonStyle = {
        color: "blue",
        border: "1px solid",
        background: "transparent",
        borderRadius: ".25rem",
        padding: ".5em 1em",
        margin: ".5em"
    };
    return (
        <button style={buttonStyle} onClick={handleClick}>                          {//Directly assigns received handleClick property as the 
                                                                                    //onClick event handler inside the button component
            }        
            {label}
        </button>
    );
}

/*
Another implementation - if one's worried about the fact the outside component will have access to 
the event object is to create a local function that invokes the property like so

function Button({ handleClick, label }) {
    const buttonStyle = {...}
    const onClick = () => handleClick() ;                   //Here we create a local function that, when called, invokes the passed property of handleClick
    return (
        <button style={buttonStyle} onClick={onClick}>      //We assign the local function onClick as the event handler, not the passed property
            {label}
        </button>
    );
}

*/


function StyledCounter() {
    const[counter, setCounter] = useState(0);
    const update = (d) => setCounter((v) => v + d);
    return (
        <section>
            <h1>Counter: {counter}</h1>
            <div>
                <Button 
                    handleClick={() => update(1)}                                   //When buttons are clicked - sets the handleClick (that we defined earlier)
                    label="Increment"                                               //property to a function updating the state
                />
                <Button 
                    handleClick={() => update(-1)}                                  //Ditto as above
                    label="Decrement"
                />
            </div>
        </section>
    );
}

function App() {
    return <StyledCounter />;
}

export default App;