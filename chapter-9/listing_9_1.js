//Listing 9.1 from React Quickly - Summation

/*
Form that adds two numbers together. Showcases controlled input for forms in React
*/
import { useState } from "react";

function Sum() {

    //Initializes two state values. No need to initialize to 0, any start numbers will work.
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    //Create two almost identical change handlers that update different state values from inputs
    const onChangeFirst = (evt) => setFirst(evt.target.valueAsNumber);
    const onChangeSecond = (evt) => setSecond(evt.target.valueAsNumber);
    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label>
                A:
                <input
                    type="number"
                    value={first}                                   //Assign correct values...
                    onChange={onChangeFirst}                        //...and change listeners to the input
                />
            </label>
            <label>
                B:
                <input
                    type="number"
                    value={second}                                  //Assign correct values...
                    onChange={onChangeSecond}                       //...and change listeners to the input
                />
            </label>
            <div>A+B: {first + second}</div>                        {//Displays output in the end, which is sum of two state values
            }
        </form>
    );
}

function App() {
    return <Sum />;
}

export default App;