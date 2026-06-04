//Listing 9.6 from React Quickly - App.js - the main component in a simple todo app

import { useState } from "react";
//Import the two detail views from simple files
import List from "./List";
import Add from "./Add";

function App() {
    //Initial state of app reflects an empty list of todo items and that we're not currently adding an item.
    const [items, setItems] = useState([]);
    const [isAdding, setAdding] = useState(false);

    //When we delete an item, we update the state with all the items except the one to be deleted.
    const handleDelete = (item) => setItems((oldItems) => oldItems.filter((oldItem) => oldItem !== item));  
    
    //When we add an item, we update the state with all the existing items plus the newly added item.
    //We then return to the list view.
    const handleAdd = (newItem) => {
        setItems((oldItems) => oldItems.concat([newItem]));
        setAdding(false);
    };
    const handleCancel = () => setAdding(false);                                                            //When we cancel adding an item we just return to the list view.
    return(
        <main>
            <nav>
                <button onClick={() => setAdding(false)}>                                                   {//Our menu simply toggles the flag about whether we're adding an item or not
                                                                                                            }
                    View list
                </button>   
                <button onClick={() => setAdding(true)}>                                                    {//Our menu simply toggles the flag about whether we're adding an item or not
                                                                                                            }             
                    Add new item
                </button>
            </nav>
            {//The main part of the application depends on the current state--are we adding an item or not?
            }
            {isAdding ? (                          
                //If we're adding an item, we include the relevant component with the two necessary callbacks as properties.                                                         
                <Add
                    handleAdd={handleAdd}
                    handleCancel={handleCancel}
                />
            ) : (
                //If we're not adding an item, we display a list of all the items, so we need to pass the relevant properties here as well.
                <List
                    items={items}
                    handleDelete={handleDelete}
                />
            )}
        </main>
    );
}
export default App;