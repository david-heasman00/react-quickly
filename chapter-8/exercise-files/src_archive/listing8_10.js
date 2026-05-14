//Listing 8.10 from React Quickly Chapter 8 - Window size display
/*
Showcases creating event listeners outside of React to listen directly to the DOM.
This listens to the window size on the window object - which is outside React.
*/

import { useState, useEffect } from "react";
function getWindowSize() {
    return `${window.innerWidth}x${window.innerHeight}`;                                //Utility function to get a nice display value for the size of the browser window
}

function WindowSize() {
    const [size, setSize] = useState(getWindowSize());                                  //Uses utility function to initialize state
    
    //Set up effect hook
    useEffect(() => {
        const onResize = () => setSize(getWindowSize());                                //Inside hook define function to be called when window resizes
        window.addEventListener("resize", onResize);                                    //Assigns hook function from above as an event listener directly on window object
        return () =>                                                                    //cleanup function which removes the listener again
            window.removeEventListener("resize", onResize);
    }, [setSize])                                                                       //Dependency of setSize. 
    return <h1>Window size: {size}</h1>                                                 //Renders actual window size in returned JSX
}

function App() {
    return <WindowSize />;
}

export default App;