//Listing 9.14 from React Quickly - the sum of natural numbers
/*
Form which takes the sum of natural numbers - so all the numbers leading up to that number. 
E.g. for 4, returns 1+2+3+4 = 10. This is simply n*(n+1)/2/ 

More importantly - this is an example of a React form with uncontrolled inputs. 
We won't use React to control the form element, but will access it directly using .elements. 

This is just for illustration purposes. 99% of the time it is better and easier to work with React controlled inputs.
 */

import { useState } from "react";
function NaturalSum() {
    const [sum, setSum] = useState(0);                                                  //We don't store input data in state at all
    const onSubmit = (evt) => {
        const value = evt.target.elements.operand.valueAsNumber;                        //Instead of reading input values from the state, we must read them through the DOM. Fortunately, that's easy to do for form elements.
        const naturalSum = (value * (value + 1)) / 2;
        setSum(naturalSum);
        evt.preventDefault();
    };
    return (
        <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <label>
                Number:
                <input
                    type="number"
                    min="1"
                    defaultValue="1"                                                //Sets defaultBalue but not value on the input element,
                    name-"operand"                                                  //and sets the name so it's easy to find via the form
                />
            </label>
            <div>
                <button>Submit</button>
            </div>
            <div>Sum: {sum}</div>
        </form>
    );
}

function App() {
    return <NaturalSum />;
}
export default App;