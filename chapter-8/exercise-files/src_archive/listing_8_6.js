//Listing 8.6 from React Quickly Chapter 8 - Handling events in React
/*
Showcasing Event propagation or "event bubbling" as a way to shortcut to a few event handlers, instead of
writing event handlers for almost every iteration imaginable.

Does this with a form which focuses when on focus, and blurs otherwise. 
*/

import { useState } from "react";

//Define constants for the event listeners
const FOCUS_NONE = 0;
const FOCUS_USER = 1;
const FOCUS_REQUEST = 2;

//Create helper function to generate the style for a section depending on whether its active section or not.
function getStyle(isActive) {
    return {
        display: "flex",
        flexDirection: "column",
        backgroundColor: isActive ? "oldlace" : "transparent"
    };
}

//Create field element as a component
function Field({ label, children }) {
    return (
        <label>
            {label}:
            <br />
            {children}
        </label>
    );
}

//Create contact form component
function Contact() {
    const [focus, setFocus] = useState(FOCUS_NONE);             //To remember what section has focus right now (at start, none of them do)
    
    //Create three different and simple event listners that we need to use
    const onUserFocus = () => setFocus(FOCUS_USER);
    const onRequestFocus = () => setFocus(FOCUS_REQUEST);
    const onBlur = () => setFocus(FOCUS_NONE);                  //When not active its blurred

    return (
        <form onBlur={onBlur}>                                  {//Assigns event listeners where we need them
        }
            <h1>Contact</h1>
            <fieldset
                onFocus={onUserFocus}                           //Assigns event listeners where we need them
                style={getStyle(focus === FOCUS_USER)}          //Assigns correct style to each section depending on whether in focus or not
            >
                <legend>User</legend>
                <Field label="Name">
                    <input />
                </Field>
                <Field label="Email">
                    <input type="email" />
                </Field>
            </fieldset>
            <fieldset
                onFocus={onRequestFocus}                        //Assigns event listeners where we need them
                style={getStyle(focus === FOCUS_REQUEST)}       //Assigns correct style to each section depending on whether in focus or not
            >
                <legend>Request</legend>
                <Field label="Subject">
                    <input />
                </Field>
                <Field label="Body">
                    <textarea />
                </Field>
            </fieldset>
        </form>
    );
}

function App() {
    return <Contact />;
}
export default App;