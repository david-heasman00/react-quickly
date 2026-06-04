//Listing 10.3 from React Quickly - Administrator dashboard
//Demonstrating the use of Context States with useContext

import { useState, createContext, useContext } from "react";        //We'll need the useState hook as well

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

const NameContext = createContext();
function Button({ children }) {
    return (
        <button style={BUTTON_STYLE}>{children}</button>
    );
}

function UserButton() {
    const name = useContext(NameContext);
    return <Button>👤 {name}</Button>;
}

function Header() {
    return (
        <header style={HEADER_STYLE}>
            <Button>Home</Button>
            <Button>Groups</Button>
            <Button>Profile</Button>
            <UserButton />
        </header>
    );
}

function Welcome() {
    const name = useContext(NameContext);
    return (
        <section>
            <h1>Welcome, {name}!</h1>
        </section>
    );
}

function Main() {
    return (
        <main>
            <Welcome />
        </main>
    );
}

function Dashboard({ name }) {                      //Everything inside the dashboard component is exactly as before
    return (
        <NameContext.Provider value={name}>
            <Header />
            <Main />
        </NameContext.Provider>
    );
}

function AdminDashboard() {
    const [user, setUser] = useState("Alice");      //Creates a simple state, defaulting to Alice
    return (
        <>
            <select                                                 //Uses a controlled select element to choose a user
                value={user}
                onChange={(evt) => setUser(evt.target.value)}
            >
                <option>Alice</option>
                <option>Bob</option>
                <option>Carol</option>
            </select>
            <Dashboard name={user} />                               {//Passes the currently selected user to the dashboard component
                                                                    }
        </>
    );
}

function App() {
    return <AdminDashboard />;
}
export default App;