//Listing 8.7 from React Quickly Chapter 8 - Admin form (potentially broken?)
/*

Showing a default action we don't want to do (to set up listing 8.8 showing how to do default actions in events)

When this runs it executes, but then because HTML buttons default to refreshing the page - this means the page refreshes/re-renders, and we lose our result

*/

import { useState } from "react";
function Admin() {
    const [password, setPassword] = useState("");               //Stores password
    const [isAdmin, setAdmin] = useState(false);                //Stores whether user is approved as admin user in another state
    const onClick = () => {
        if (password === "platypus") {                          //When user clicks button checks if entered password matches expectation
            setAdmin(true);                                     //if so updates state
        }
    };
    return (
        <>
            {isAdmin && <h1>Bacon is delicious!</h1>}           {//Displaus conditional JSX depending on whether user is approved as admin or not
            }
            <form>                                              {//Input filed will update the state password when changed
            }
                <input
                    type="password"
                    onChange={
                        (evt) => setPassword(evt.target.value)
                    } 
                />
                <button onClick={onClick}>                      {//Button cals event handler when clicked
                }
                    Login
                </button>                                   
            </form>
        </>
    );
}
function App() {
    return <Admin />;
}
export default App;
