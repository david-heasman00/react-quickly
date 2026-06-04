//Listing 9.11 from React Quickly  - excerpt showing the form component but with a drop down
/*
This excerpt looks at a block of code if we were to use a select dropdown to choose our priority.
It's an excerpt, so not the full block of code to make things work.
*/

import { useState } from "react";
function Add({ handleAdd, handleCancel }) {
    const [data, setData] = useState({
        title: "",
        priority: "low",                                                    //Initializes priority to a simple string
    });

    //We use the same change handler for regular inputs as well as select boxes
    const onChange = (evt) => {
        const key = evt.target.name;
        const value = evt.target.value;
        setData((oldData) => ({ ...oldData, [key]: value }));
    };
    ...
        <label>
            Priority:
            <select
                value={data.priority}                                       //Assigns value and onChange properties like
                name="priority"                                             //on a regular input directly on the select
                onChange={onChange}                                         //element
            >
                {//Adds options using option elements with a value and display text
                }
                <option value="low">Low</option>                            
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
            </select>
        </label>
    ...
}