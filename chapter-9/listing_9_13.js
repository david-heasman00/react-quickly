//Listing 9.13 from React Quickly - excerpt showing the form component with textarea
/*
This excerpt shows how to enter a multi-line input or a text area in React.
Again, an excerpt, so not the full block of code to make things work
 */

import { useState } from "react";
function Add({ handleAdd, handleCancel }) {
    const [data, setData] = useState({
        title: "",
        description: ""                                                                                     //The state value is again initialized to a string
    });
    const onChange = (evt) => setData((oldData) => ({ ...oldData, [evt.target.name]: evt.target.value }));
    ...
        <label>
            Description:
            <textarea
                value={data.description}                                                                    //Sets the value property directly on the textarea element--no need to set it as a child node
                name="description"
                onChange={onChange}                                                                         //Uses the same generalized change handler as before as long as we make sure to set the name property as well
            />
        </label>
}