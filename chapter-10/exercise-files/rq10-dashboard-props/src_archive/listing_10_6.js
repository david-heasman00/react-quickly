//Listing 10.6 from React Quickly - Loading component with reducer
//Using a reducer to manage interdependent states - creating different returns depending on the loading status of a component

import { useReducer, useEffect } from "react";
const URL = "//swapi.dev/api/films";

//We extract the initial state to a variable rather than one of the options
//inside the reducer
const INITIAL_STATE = {
    status: "INITIALISE",
    result: null,
    error: null
};

//In the reducer function we only expect actions of type
//LOADING, FAILURE, and SUCCESS.
function reducer(state, { type, payload }) {
    switch(type) {
        case "LOADING":
            return { ...state, status: "LOADING" };
        case "FAILURE":
            return { ...state, status: "FAILURE", error: payload };
        case "SUCCESS":
            return { ...state, status: "SUCCESS", result: payload };    
        default:                                                                //We add a default case to the switch to handle
            return state;                                                       //the case where some unknown nonsense is dispatched.
    }
}

function Loader() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);               //When the loading succeeds, we change the status and see the result
    useEffect(() => {
        dispatch({ type: "LOADING" });                                          //In the effect hook we start by setting the status to LOADING by dispatching the appropriate action.
        fetch(URL)
            .then((res) => res.json())
            .then(
                ({ results }) => dispatch({                                     //If results are returned, we set them in the state by dispatching the SUCCESS action
                                    type: "SUCCESS",
                                    payload: results
                })
            )
            .catch(
                ({ message }) => dispatch({                                     //If some error occurs along the way, we dispatch an ERROR action with a message.
                                    type: "FAILURE",
                                    payload: message
                })
            );
    }, []);

    const { status, error, result } = state;                                    //We now destructure the state into the three variables we know it contains
    //We display the proper message depending on the 
    //status variable using the values of error and 
    //result where necessary.
    if (status === "INITIALISE") {                                             
        return <h1>Initializing...</h1>;
    }
    if (status === "LOADING") {
        return <h1>Loading...</h1>;
    }
    if (status === "FAILURE") {
        return <h1>Error occurred: {error}</h1>;
    }
    return (
        <>
            <h1>Results are in</h1>
            <ul>
                {result.map(({ title }) => (<li key={title}>{title}</li>))}
            </ul>
        </>
    );
}
function App() {
    return <Loader />;
}
export default App;