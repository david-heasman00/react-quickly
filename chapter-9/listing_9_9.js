//Listing 9.9 from React Quickly - The form component if we want radio buttongs (excerpt)

/*
This excerpt looks at a block of code if we were to add a priority radio buttons to our todo-list
So basically another form, which has radio buttons. These will be low to urgent in terms of priority
*/

import { useState } from "react";

//Creates a helper component to render a label with a radio button inside
function Radio({ value, label, onChange, current }) {  
    return(
        <label>
            <input
                type="radio"
                name="importance"                       //Sets the name of all the radio buttons to the same name in this component so they are part of the same radio button group.
                checked={value === current}             //Sets checked to true on only the radio button that is currently selected
                value={value}                           //Sets the value that is static for each instance of this component
                onChange={onChange}                     //Adds the same change handler to all of them.
            />
            {label}
        </label>
    );
}

function Add({ handleAdd, handleCancel }) {
    const [data, setData] = useState({ title: "", importance: "low"});
    const onChangeTitle = (evt) => setData((oldData) => ({ ...oldData, title: evt.target.vaulue }));                    //Change handler works as usual
    const onChangeImportance = (evt) => setData((oldData) => ({ ...oldData, importance: evt.target.value }));
    ...
        //Create four instances of the Radio component
        <Radio
            value="low"
            label="Low"
            current={data.importance}
            onChange={onChangeImportance}
        />
        <Radio
            value="medium"
            label="Medium"
            current={data.importance}
            onChange={onChangeImportance}
        />
        <Radio
            value="high"
            label="High"
            current={data.importance}
            onChange={onChangeImportance}
        />
        <Radio
            value="urgent"
            label="Urgent"
            current={data.importance}
            onChange={onChangeImportance}
        />
...
}