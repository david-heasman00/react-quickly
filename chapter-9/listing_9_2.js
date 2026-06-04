//Listing 9.2 from React Quickly - Hex Color Display 

/*
Form to enter hex colours, showcasing input validation and filtered input (form input will only allow capitalised hexadecimal characters)
returning the colour inputted as an icon
*/
import { useState } from "react";

//Defines a static placeholder which uses a conic gradient to display a checkered background
const PLACEHOLDER = `conic-gradient(
    gray 0.25turn, white 0 0.5turn,
    gray 0 0.75turn, white 0 1 turn
)`;

function HexColor() {
    const [color, setColor] = useState("BADA55");                                   //Initialize our state to a valid colour input. Sadly Mother... doesn't fit into a hex colour....
    const onChange = (evt) =>                                                       
        /*In change handler, examine current value of the input field after the event, filter it
        against a regular expression and uppercase the entire result.*/
        setColor(
            evt.target.value
                .replace(/[^0-9a-f]/gi, "")
                .toUpperCase()
        );
    const outputStyle = {
        width: "20px",
        border: "1px solid",
        /*When we want to output the color value, we first check if the colour string is exactly 6 characters
        If good, we precede it with a hash mark in front; otherwise, we display the placeholder instead.*/
        background: color.length === 6
            ? `#${color}`
            : PLACEHOLDER,
    };
    return (
        <form style={{ display: "flex" }}>
            <label>
                Hex color:
                    <input value={color} onChange={onChange} />                     {//Adds the value and change handler to the input field as before
                                                                                    }
            </label>
            <span style={outputStyle} />
        </form>
    ); 
} 

function App() {
    <return HexColor />;
}
export default App;