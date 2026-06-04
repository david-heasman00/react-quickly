//Listing 9.4 from React Quickly - Address Form

/*
Address form that showcases how to use one change handler and one state value for multiple similar items using objects and keys
*/

import { useState } from "react";
function Address() {

    //State is an object this time, holding all the variables that we need
    const [data, setData] = useState({
        address1: "",
        address2: "",
        zip: "",
        city: "",
        state: "",
        country: ""
    });

    //onChange function is now a generator that first takes a key and then returns an event handler.
    const onChange = (key) => (evt) => {

        /*When an input changes, we update the state with the entire old state
        (to not override any existing values), but we then addin the new value
        with the indicated key.*/
        setData((oldData) => 
            ({...oldData, [key]: evt.target.value })
        );
    };
    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label>
                Address line 1:
                <input 
                    value={data.address1}                                           //Apply the value and change
                    onChange={onChange("address1")}                                 //handler to all the inputs (see below)
                />
            </label>
            <label>
                Address line 2:
                <input 
                    value={data.address2}                                           //And again here etc.                                
                    onChange={onChange("address2")}
                />
            </label>
            <label>
                Zip:
                <input 
                    value={data.zip}
                    onChange={onChange("zip")}
                />
            </label>
            <label>
                City:
                <input 
                    value={data.city}
                    onChange={onChange("city")}
                />
            </label>
            <label>
                State:
                <input 
                    value={data.state}
                    onChange={onChange("state)}
                />
            </label>
            <label>
                Country:
                <input 
                    value={data.country}
                    onChange={onChange("country")}
                />
            </label>
        </form>
    );
}
function App() {
    return <Address />;
}
export default App;