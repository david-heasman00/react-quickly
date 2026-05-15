//Listing 8.12 from React Quickly Chapter 8 - An expandable menu (naive version)
/*
Listing combines React event listners with manual DOM event listening. Creates a menu 
that pops open when we press a button, but closes when we click the mouse anywhere
outside the menu. 

This is a naive way of making it that will have a bug. This will be fixed in listing 8.13
*/

import { useState, useEffect } from "react";

function Menu() {
    const [isExpanded, setExpanded] = useState(false);                                                             //Stores whether the menu is expanded or not in a state value (default false)
    useEffect(() => {
        if (!isExpanded) {
            return;                                                                                                 //Aborts early inside our effect hook if the menu isn't expanded
        }
        const onWindowClick = () => setExpanded(false);                                                             //If the menu is expanded, we create a listener that will collapse the menu
                                                                                                                    //again to be invoked when the mouse is clicked anywhere inside the window
        window.addEventListener(                                                                                    //Adds event listeners to the window object
            "pointerdown", onWindowClick                                                                            // |
        );                                                                                                          // v
        return () => window.removeEventListener(                                                                    // Removes event listener on cleanup
            "pointerdown", onWindowClick                                                                            
        );
    }, [isExpanded]);                                                                                               //isExpanded in dependency array, therefore hook will rerun every time the menu changes
                                                                                                                    //state from expanded to collapsed and vice versa
    return (
        <main>
            <button onClick={() => setExpanded(true)}>                                                              {//Causes menu button to simple toggle the expanded flagf to true
            }
                Show menu
            </button>
            {isExpanded && (                                                                                        //Renders our menu if the expanded flag is true
                <div style={{ border: "1px solid black", padding: "1em" }}>
                    This is the menu
                </div>
            )}
        </main>
    );
}

function App() {
    return <Menu />;
}

export default App;