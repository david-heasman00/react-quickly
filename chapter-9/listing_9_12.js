//Listing 9.12 from React Quickly - excerpt showing the form component but multiselect
/*
This excerpt looks at a block of code if we were to use multi-select to choose a person, and also the priority in our app.
It's an excerpt, so not the full block of code to make things work.
*/

import { useState } from "react";
function Add({ handleAdd, handleCancel }) {
    const [data, setData] = useState({
        title: "",
        people: []
    });
    const onChange = (evt) => {
        const key = evt.target.name;
        const value = evt.target.value;
        setData((oldData) => ({ ...oldData, [key]: value}));
    };
    const onChangePeople = (evt) => {
        const options = 
            Array.from(evt.target.selectedOptions);
        const value = options.map((opt) => opt.value);
        setData((oldData) => ({ ...oldData, people: value }));
    };
    ...
        <label>
            People:
            <select
                value={data.people}
                name="people"
                onChjange={onChangePeople}
                multiple
            >
                <option>Tinky Winky</option>
                <option>Po</option>
                <option>Laa-Laa</option>
                <option>Dipsy</option>
            </select>
        </label>
    ...
}