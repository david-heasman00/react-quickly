//Listing  9.5 from React Quickly - Simpler Address Form

/*
Similar to listing 9.4, but with an added layer of simplification. 
Change handler uses the "name" property of the form for its logic, so no need to 
it being a generator. 
*/

import { useState } from "react";

function Address() {
    const [data, setData] = useState({
        address1: "",
        address2: "",
        zip: "",
        city: "",
        state: "",
        country: ""
    });
    const onChange = (evt) => {
    //onChange function is now back to being  asimple event handler, and we extract the name of the input from the target
const key = evt.target.name;                                            
        const value = evt.target.value;                                 //Also extracts the current value int he input field the same way
        setData((oldData) => 
        ({...oldData, [key]: value }));                                 //Updartes the state object with the newly changed input
    };
    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label>
                Address line 1:
                <input
                    value={data.address1}
                    name="address1"                                     //Assigns name and property and a simple event handler to each input node
                    onChange={onChange}
                />
            </label>
            <label>
                Address line 2:
                <input
                    value={data.address2}
                    name="address2"
                    onChange={onChange}
                />
            </label>
            <label>
                Zip:
                <input
                    value={data.zip}
                    name="zip"
                    onChange={onChange}
                />
            </label>
            <label>
                City:
                <input
                    value={data.city}
                    name="city"
                    onChange={onChange}
                />
            </label>
            <label>
                State:
                <input
                    value={data.state}
                    name="state"
                    onChange={onChange}
                />
            </label>
            <label>
                Country:
                <input
                    value={data.country}
                    name="country"
                    onChange={onChange}
                />
            </label>
            <pre>{JSON.stringify(data, true, 2)</pre>
        </form>
    );
}
function App() {
    return <Address />;
}
export default App;