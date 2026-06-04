//Listing 9.10 from React Quickly - excerpt showing the form component but with a check box

/*
This excerpt looks at a block of code if we were to add checkboxes to our form.
It's an excerpt, so not the full block of code to make things work.
*/

import { useState } from "react";
function Add({ handleAdd, handleCancel }) {
    const [data, setData] = useState({ title: "", isUrgent: false });

    //The change handler for the title, like all the other change handlers we've writen for titles
    //by looking at the value on the target property.
    const onChangeTitle = (evt) => setData((oldData) => ({ ...oldData, title:evt.target.value }));

    //The change handler for the checkbox is different, however. It examines the Boolean property
    //.checked on the target property.
    const onChangeUrgent = (evt) => setData((oldData) => ({ ...oldData, isUrgent: evt.target.checked }));
...
    <label>
        Title:
        <input
            value={data.title}                                                  //Assigns the value and onChange
            onChange={onChangeTitle}                                            //properties as normal to the regular text input
        />
    </label>
    <label>
        <input
            type="checkbox"                                                     //Assigns checked and onChange properties to our
            checked={data.isUrgent}                                             //checkbox input. Note we don't need a value property
            onChange={onChangeUrgent}                                           //here as it doesn't serve any useful function in this instance.
        />
        Urgent?
    </label>
...
}