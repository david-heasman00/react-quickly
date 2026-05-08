//Listing 8.5 from React Quickly Chapter 8 - Handling events in React

//Showcasing event persistence, something which didn't exist in older versions of React
//Does this by creating a counter which changes the value based on what we choose from an Array

import { useState } from "react";

function DropdownCounter() {
    const [counter, setCounter] = useState(0);
    const onChange = (evt) => setCounter(
        //Adds the selected option to the current counter value in our change event handler by using an update function
        (value) => (value) + parseInt(evt.target.value)             
    );
    //Value will read from this array (yes, using .map)
    const values = [1,2,3,4,5]
    return (
        <section>
            <h1>Counter: {counter}</h1>
            <select onChange={onChange}>                {//Assigns the event handler to the select element
            }
                {values.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </section>
    );
}
function App() {
    return <DropdownCounter />;
}
export default App;