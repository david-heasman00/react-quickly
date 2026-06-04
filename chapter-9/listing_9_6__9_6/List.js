//Listing 9.7 from React Quickly - list.js - List component in a simple todo app

function List({ items, handleDelete }) {
    //Important part of this component is the early return in case of no items. There's no need to display a table if there's nothing to fill it with.
    if(!items.length) {
        return <h2>To-do list empty, go out and play!</h2>;
    }
    return (
        <>
            <h2>{items.length} item(s) to do</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Due date</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {//When there is something to display, we loop over all the items and display a row for each.
                    }
                    {items.map((item) => (                                                      
                        <tr key={JSON.stringify(item)}>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.date}</td>
                            <td>
                                <button onClick={() => handleDelete(item)}>                 {//The Delete button invokes the cancel callback function with the 
                                                                                            //the entire item as an argument.
                                                                                            }
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default List;