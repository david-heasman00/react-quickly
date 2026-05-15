//Listing 8.13 from React Quickly Chapter 8 - An expandable menu 
/*
Fixes the bug in listing 8.12 where the menu collapses when we click inside the menu. 
Here we'll add more event listeners and stop the event propagating, so the user can click
inside the menu once expanded, and it won't collapse.
*/

import { useRef, useState, useEffect } from "react";
function Menu() {
    const [isExpanded, setExpanded] = useState(false);
    useEffect(() => {
        if (!isExpanded) {
            return;
        }
        const onWindowClick = () => setExpanded(false);
        const onMenuClick = (evt) => evt.stopPropagation();                                     //Stops pointer events inside the menu itself to close the menu by suppressing propagation of pointer events from "escaping" beyond the menu node
        const menu = menuRef.current;                                                           //Before we assign a litener to the menu element, we need to capture a reference to said element via the ref.
        window.addEventListener("pointerdown", onWindowClick);                                  
        menu.addEventListener("pointerdown", onMenuClick);                                      //Adds a listener to the menu element
        return () => {
            window.removeEventListener("pointerdown", onWindowClick);                           //Removes both of these listeners on cleanup
            menu.removeEventListener("pointerdown", onMenuClick);
        };
    }, [isExpanded]);
    const menuRef = useRef();                                                                   //We nee a useRef to store our reference to the menu element.
    return (
        <main>
            <button onClick={() => setExpanded(true)}>Show menu</button>
            {isExpanded && (
                <div 
                    ref={menuRef}                                                               //Assigns our reference to the proper JSX element
                    style={{ border: "1px solid black", padding: "1em" }}
                >
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