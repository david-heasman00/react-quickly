//Listing 6.5 from React Quickly - An interactive countdown.

//This exercise/example illustrates running an effect and cleaning up only on some renders
//As its a countdown clock we want it to cleanup when it stops running, and we also can pause it, stopping the effec

import { useEffect, useState } from "react";
function Countdown({ from }) {
    const [seconds, setSeconds] = useState(from);           //Initialize the seconds to the value of the initial property 
                                                            // "from" (which will determine the start of the counter)

    const [isRunning, setRunning] = useState(false);        //Initialize the isRunning flag to false
    
    useEffect(() => {
        if (!isRunning) {                                   //First thing we check in the effect is if the countdown is
            return;                                         //running at. If not we abort silently (and return nothing).
        }        
        const interval = setInterval(
            () => 
                setSeconds((value) => {                     //If the countdown is running, we define an interval that updates
                                                            //the state value every second.
                    if (value <=1) {                        
                        setRunning(false);                  //When updating the state value we check if the value was 1 or less;
                    }                                       //if so we stop the countdown.

                    return value - 1;                       //Returns one less than the current value of the counter
                }),
            1000
        );
        return () => clearInterval(interval);               //Making sure our effect returns a cleanup funciton that cancels the interval.

    }, [isRunning]);                                        //Our effect is made to depend on the value of the isRunning state value. Whenever
                                                            //this changes, our effect runs (and the cleanup of the last effect runs just before it).
    return (
        <section>
            <h2>Time left: {seconds} seconds</h2>
            <button onClick={() => setSeconds(from)}>        {//Create a button that resets the counter and only that (it doesn't change the
                                                              //value of the flag)
            }
                Reset
            </button>
            <button
                onClick={() => setRunning((v) => !v)}       //Another button flips the value of the run flag, but it doesn't change the counter
                disabled={seconds === 0}                    //This button though is disabled if the counter is zero
            >
                {isRunning ? "Pause" : "Resume"}            {//The text on the button is varied according to the state of the run flag
                }
            </button>
        </section>
    );
}
function App() {
    return<Countdown from={10} />;                          //Run component with start interval of 10
}
export default App;

