import { useState } from "react";
function Accordion() {
  const [isExpanded, setExpanded] = useState(false);        //initialise to false
  return (
    <main>
      <h2 style={{ display: "flex", gap: "6px "}}>          {//Double curly braces because its CSS
        }
        Secret password 
        <button onClick={() => setExpanded(false)}>           {//Invoke setter and set to false here
        }
          -
        </button>
        <button onClick={() => setExpanded(true)}>            {//Invoke setter and set to true
        }
          +
        </button>
      </h2> 
      {isExpanded && (                                      //Short circuit render (displays if Boolean is true, if false collapses)
        <p>
          Password: <code>hunter2</code>.
        </p>
        )}
    </main>
  );
}
function App() {
  return <Accordion />;
}
export default App;