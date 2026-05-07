//Listing 6.6 from React Quickly - A Dice Roller
//App that rolls 3 dice to illustrat that children render on parents being re-rendered

import { useState } from "react";
function Die() {
    const style = {
        border: "2px solid black",
        display: "inline-block",
        width: "2em",
        height: "2em",
        textAlign: "center",
        lineHeight: 2,
    };
    const value = Math.floor(6 * Math.random());                    //Even though our Die component appears pure, it actually has an
                                                                    //has an external source of information - Math.random(), which *potentially*
                                                                    //returns something new on every render.
    return <span style={style}>{value}</span>;
}

function DiceRoller() {
    const [rolls, setRolls] = useState(1);                          //Our DiceRoller component is stateful
    return (
        <main>
            <h1>Rolls: {rolls}</h1>
            <button onClick = {() => setRolls((r) => r + 1)}>       {//Clicking the button increases the roll count, which *forces a complete
                                                                    //render* of the component, causing all the child components to render
                                                                    //giving us new dice.
            }
                Re-roll
            </button>
            <div>                                                   {//Three seperate instances of the same Die component - each with its own
                                                                    //internal random source of information
            }
                <Die />                                             
                <Die />
                <Die />
            </div>
        </main>
    );
}

function App() {
    return <DiceRoller />;
}
export default App;


/*
Note: This is an illustrative example to show that even "pure" Components re-render when they're parent re-renders.
In a real example, the variable component (the return of the Dice) would be put inside component state, instead of
expecting it to render magically. If we were to actually build this we'd probably use a parent component to, say DiceHolder
to generate three random numbers, and then pass them to the dice as properties. But this demo fulfills its function - showing that
DiceRoller re-renders when Die changes.
*/