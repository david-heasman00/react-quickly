//Listing 6.8 from React Quickly - A push button with an icon *component*
//This differs from listing 6.7 in that the icon is no longer a function
//but a component. 

//Listing 6.8 renders a button with an icon component

import { useState } from "react";

function Icon({ type }) {                               
    return <img src={`/images/${type}.png`} width="16" alt="" />;
}

//Button component now expects a ButtonIcon (instead of getIcon - notice camelCase change) property
//rather than a getIcon function as before
function Button({ label, ButtonIcon }) {
    const [pressed, setPressed] = useState(false);
    return (
        <button onClick={() => setPressed((p) => !p)}>
            <ButtonIcon pressed={pressed} />                        {//Because its a component we expect, we can
                                                                    //render it as such directly in the body.
            }                         
            {label}                              
        </button>
    );
}

//getIcon is now not just a function, but a fully fledged functional component (by accepting properties rather
//than a single argument).
function LockIcon({ pressed }) {
    return pressed ? <Icon type="lock" /> : <Icon type="unlock" />;
}

//Finally, we just supply LockIcon as a property, which is legal
//to do even though we haven't done it before
function LockButton() {
    return <Button label="Lock" ButtonIcon={LockIcon} />;
}

function App() {
    return <LockButton />;
}

export default App;

//Listing 6.7 was an example of *render props* - providing functions that render JSX - it was a common approach
//in older React codebases - but is unnecessary now. With functional components, almost all such cases are better 
//solved by converting the argument to a full component like we did in listing 6.8