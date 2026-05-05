import { useState } from "react";

//Utility function that takes array of task objs and returns a new array of same objs, except one we mark as done
function markDone(list, index) {
  return list.map(
    (item, i) => (i === index ? { ...item, done: true} : item)
  );
}

//FilterButton takes 4 props and renders a nice button based on this
function FilterButton({ current, flag, setFilter, children}) {
  const style = {
    border: "1px solid dimgray",
    background: current === flag ? "dimgray" : "transparent",
    color: current === flag ? "white" : "dimgray",
    padding: "4px 10px"
  };
  return (
    <button
      style={style}
      onClick = {() => setFilter(flag)} //OnClick calls passed setter function (which we'll define later)
    >
      {children}
    </button>
  );
}

//Task component takes no of props including a callback (markDone) (you'll see it later)
function Task({ task, done, markDone }) {
  const paragraphStyle = {
    color : done ? "gray" : "black",
    borderLeft: "2px solid"
  };
  const buttonStyle = {
    border: "none",
    background: "transparent", 
    display: "inline",
    color: "inherit"
  };
  return (
    <p style = {paragraphStyle}>
      <button
        style={buttonStyle}
        onClick = {done ? null : markDone}
      >
        {done ? "✅" : "[ ]"}
      </button>
      {task}
    </p>
  );
}

//TodoApp
function TodoApplication({ initialList }) {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone
    ? todos.filter(({ done }) => !done) //Read this as "filter where done is false" rather than "return for done to false"
    : todos;
  return (
    <main>
      <div style={{ display: "flex" }}>
        {//set props for FilterButton incl the states
        }
        <FilterButton
          current={hideDone}
          flag = {false}
          setFilter={setHideDone}
        >
          Show all
        </FilterButton>
        <FilterButton
          current={hideDone}
          flag={true}
          setFilter={setHideDone}
        >
          Hide done
        </FilterButton>
      </div>
      {filteredTodos.map((todo, index) => (
        <Task
          key={todo.task}
          task={todo.task}
          done={todo.done}
          markDone = {() => setTodos((value) => markDone(value, todo.index))}
        />
      ))}
    </main>
  );
}

function App() {
  const items = [
    { task: "Feed the plants", done: false, index: 0 },
    { task: "Water the dishes", done: false, index: 1 },
    { task: "Clean the cat", done: false, index: 2 }
  ];
  return <TodoApplication initialList = {items} />;
}

export default App;