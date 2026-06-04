//Listing 9.8 from React Quickly - Add.js the form component in a simple todo app

import { useState } from "react";
function Add({ handleAdd, handleCancel }) {
    //Initializes our state as before
    const [data, setData] = useState({
        title:"",
        category:"",
        date:""
    });
    
    //This is the same change handle we used in listing 9.5
    const onChange = (evt) => {
        const key = evt.target.name;
        const value = evt.target.value;
        setData((oldData) => ({...oldData, [key]: value }));
    };

    /*When we submit the form, we need to send the form data to the relevant callback
    and prevent the default form action. If we forget the latter, the page will reload
    and all data will be lost. */
    const onSubmit = (evt) => {
        handleAdd(data);
        evt.preventDefault();
    };
    return (
        <form
            onSubmit={onSubmit}                                         //Assigns the submit handler to the form
            style={{ display: "flex", flexDirection: "column" }}
        >
            <label>
                Title:
                <input
                    value={data.title}                                 //Assigns the properties to the inputs as normal.
                    name="title"                                       
                    onChange={onChange}                                
                />
            </label>
            <label>
                Category:
                <input
                    value={data.category}                               //ditto
                    name="category"
                    onChange={onChange}
                />
            </label>
            <label>
                Category:
                <input
                    type="date"                                         //ditto. Not how we also add type="date" to the due date input.
                    value={data.date}                                   
                    name="date"
                    onChange={onChange}
                />
            </label>
            <div>
                <button>Submit</button>                                 {//A button is by default a Submit button unless explicitly set to type="button",
                                                                        //so this is the Submit button. We don't need a click handler because the form 
                                                                        //submit handler will take care of that.
                                                                        }
                <button type="button" onClick={handleCancel}>           {//The cancel button must not submit the form, so we have to add an explicit type
                                                                        //and then invoke the cancel callback on click.
                                                                        }
                    Cancel
                </button>
            </div>
        </form>
    );
}
export default Add;