//Listing 8.8 from React Quickly Chapter 8 - Admin form (potentially fixed?)
/*

Listing 8.7 doesn't do what we want, because the HTML button re-renders. 
This fixes that by introducing two changes - using the submit event handler instead of the onClick event handler. 
And then using evt.preventDefault() to prevent the default behaviour so the page doesn't refresh
*/

import { useState } from "react";
function Admin() {
    const [password, setPassword] = useState("");
    const [isAdmin, setAdmin] = useState(false);
    const onSubmit = (evt) => {                                                        //Accepts event object as an argument to the event handler in order to prevent default action
        evt.preventDefault();                                                          //Invokes evt.preventDefault method in the submit handler regardless of what else happens in the handler
        if (password === "platypus") {
            setAdmin(true);
        }
    };
    return isAdmin ? (
        <h1>Bacon is delicious!</h1>
    ) : (
        <form onSubmit={onSubmit}>                                                     {//Connects event handler to the form element
            }
            <input
                type="password"
                onChange={(evt) => setPassword(evt.target.value)} 
            />
            <button>Login</button>
        </form>
    );
}
function App() {
    return <Admin />;
}
export default App;