//Todo app with multiple useState hooks

import { useState } from "react";

//Utility function that takes an array of task objects
//and returns a new array of same objects, except 
//one of them will be marked as done, as indicated
//by second argument.
function markDone(list, index) {
  return list.map(
    (item, i) => (i === index ? { ...item, done: true} : item)
  );
}

function TodoApplication({ initialList }) {
  const [todos, setTodos] = useState(initialList);          //Still initialize task list using useState hook like in working todo app
  const [hideDone, setHideDone] = useState(false);          //Now have second instance of useState hook for the new filter flag, which is defaulted to false
  const filteredTodos = hideDone                            //
    ? todos.filter(({ done }) => !done)
    : todos;
  return (
    <main>
      <div style={{ display: "flex "}}>                 
        <button onClick = {() => setHideDone(false)}>      {//Two filter buttons call filter setter with either true or false
          }
          Show all                                        
        </button>
        <button onClick = {() => setHideDone(true)}>
          Hide done
        </button>
      </div>
      {filteredTodos.map((todo, index) => (                 //Call and use new filtered list
        <p key={todo.task}>
          {todo.done ? (
            <strike>{todo.task}</strike>
          ) : (
            <>
              {todo.task}
              <button                                       //If not completed renders abutton that will call our utility
                onClick={() => setTodos((value) =>          //function and update the task list state
                  markDone(value, todo.index)
                )}
              >
                x
              </button>
            </>
          )}
        </p>
      ))}
    </main>
  );
}

//Create initial list of objects, each marked as not done. 
//Note we need to remember the original position of each item, as the index
//of the filtered array will be different from the original position

function App() {
  const items = [
    { task: "Feed the plants", done: false, index: 0 },
    { task: "Water the dishes", done: false, index: 1 },
    { task: "Clean the cat", done: false, index: 2 }
  ];
  return <TodoApplication initialList={items} />;
}
export default App;