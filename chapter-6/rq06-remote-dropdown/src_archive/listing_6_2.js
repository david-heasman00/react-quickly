import { useState, useEffect } from "react";
function StopWatch() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(                   //setInterval in-built function to Browser
            () => setSeconds((seconds) => seconds +1),
            1000
        );
        return () => clearInterval(interval);           //cleanup - clearInterval is built-in Browser function
    }, []);                                             //You could have put setSeconds inside the array here - same effect - but since its static it isn't necessary
    return <h1>Seconds: {seconds}</h1>;
}
function App() {
    const [showWatch, setShowWatch] = useState(false);
    return (
        <>
            <button onClick={() => setShowWatch((b) => !b)}>Toggle watch</button>
            {showWatch && <StopWatch />}               {//Conditionally render stopwatch to see if cleanup function is working
            }
        </>
    );
}
export default App;