//Listing 10.2 from React Quickly - Dashboard with context
//Use of React Context to avoid prop drilling (listing 10.1 rewritten with React Context)

import { createContext, useContext } from "react";              //Imports two functions from react package
const BUTTON_STYLE = {
    display: "inline-block",
    padding: "4px 10px",
    background: "transparent",
    border: "0"
};
const HEADER_STYLE = {
    display: "flex",
    justifyContent: "flex-end",
    borderBottom: "1px solid"
};
const NameContext = createContext();                            //The context is created in the global scope, so we can access it from anywhere.
function Button({ children }) {
    return (
        <button style={BUTTON_STYLE}>{children}</button>
    );
}
function UserButton() {                                         //A lot of our component don't take any properties at all anymore.
    const name = useContext(NameContext);                       //The two components that need access tot he name can do so by hooking into the context using useContext
    return <Button>👤 {name}</Button>;
}
function Header() {                                             //A lot of our component don't take any properties at all anymore.
    return (
        <header style={HEADER_STYLE}>
            <Button>Home</Button>
            <Button>Groups</Button>
            <Button>Profile</Button>
            <UserButton />
        </header>
    );
}
function Welcome() {                                            //A lot of our component don't take any properties at all anymore.
    const name = useContext(NameContext);                       //The two components that need access tot he name can do so by hooking into the context using useContext
    return (
        <section>
            <h1>Welcome, {name}!</h1>
        </section>
    );
}
function Main() {                                               //A lot of our component don't take any properties at all anymore.
    return (
        <main>
            <Welcome />
        </main>
    );
}
function Dashboard({ name }) {
    return (
        <NameContext.Provider value={name}>                     {//In the dashboard component we make sure to wrap the entire tree in a context provider with the name as the context value.
                                                                }
            <Header />
            <Main />
        </NameContext.Provider>
    );
}
function App() {
    return <Dashboard name="Alice" />;                          //In the main application component, we initialize the entire dshboard with the name "Alice."
}
export default App;