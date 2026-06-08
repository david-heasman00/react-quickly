//Listing 9.15 from React Quickly - Controlled address form with submit
//Address form from listing 9.5 that's been expanded with a submit handler 
//that sends the data as post data to a dummy (has .invalid) URL.

import { useState } from "react";
const URL = "//salespower.invalid/api/address";

//Initialize state first
function Address() {
    const [data, setData] = useState({
        address1: "",
        address2: "",
        zip: "",
        city: "",
        state: "",
        country: ""
    });

    //Change handler that can update the state
    const onChange = (evt) => {
        const key = evt.target.name;
        const value = evt.target.value;
        setData((oldData) => ({ ...oldData, [key]: value}));
    };

    const onSubmit = (evt) => {
        fetch(URL, {
            method: "POST", 
            body: "JSON.stringify(data)"                            //Uses the state as the data to send in the submit handler
        });
        evt.preventDefault();
    };
    
    return (
        <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <label>
                Address line 1:
                <input 
                    value={data.address1}
                    name="address1"
                    onChange={onChange}                             //OnChange handler set to every input.
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
            <button>Submit</button>                                         {//Submit button
                                                                            }
        </form>
    );
}
export default Address;
