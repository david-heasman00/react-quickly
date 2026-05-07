//Listing 6.7 from React Quickly - A push button with an icon function
//This along with listing 6.8 illustrates how a component can render inside 
//a function, as opposed to just inside another component

//Listing 6.7 renders a button with an icon function

import { useState } from "react";

//A general icon component embeds an image loaded from the right folder.
function Icon({ type }) {                               
    return <img src={`/images/${type}.png`} width="16" alt="" />;
}

function Button({ label, getIcon }) {
    const [pressed, setPressed] = useState(false);
    return (
        <button onClick={() => setPressed((p) => !p)}>
            {//Our button calls the getIcon function with its current state on every render
            }
            {getIcon(pressed)}
            {label}                              
        </button>
    );
}

function LockButton() {
    //Define getIcon to return one of two icons
    const getIcon = (pressed) => 
        pressed ? <Icon type="lock" /> : <Icon type="unlock" />;
    return <Button label="Lock" getIcon={getIcon} />;
}

function App() {
    return <LockButton />;
}

export default App;