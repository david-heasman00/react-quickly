//Listing 10.4 from React Quickly - Border width by context
//Shows how React Context inherits the value from the closest context above it

import { useContext, createContext } from "react";
const BorderContext = createContext(1);                 //Creates initial context with a default value of 1

function Button({ children }) {
    const borderWidth = useContext(BorderContext);      //In the button component, we consume whatever value is provided by the nearest provider and use that as the border width property in CSS.
    const style = {
        border: `${borderWidth}px solid black`,
        background: "transparent"
    };
    return <button style={style}>{children}</button>;
}
function CartButton() {
    return (
        <BorderContext.Provider value={5}>              {//Adds a border width provider around the button inside the cart button to provide this button with exactly 5px
                                                        }
            <Button>Cart</Button>
        </BorderContext.Provider>
    );
}
function Header() {
    const style = {
        padding: "5px",
        borderBottom: "1px solid black",
        marginBottom: "10px", 
        display: "flex",
        gap: "5px",
        justifyContent: "flex-end"
    };
    return (
        <header style={style}>
            <Button>Clothes</Button>
            <Button>Toys</Button>
            <CartButton />
        </header>
    );
}
function Footer() {
    const style= {
        padding: "5px",
        borderTop: "1px solid black",
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between"
    };
    return (
        <footer style={style}>
            <Button>About</Button>
            <Button>Jobs</Button>
            <CartButton />
        </footer>
    );
}
function App() {
    return (
        <main>
            <Header />
            <h1>Welcome to the shop!</h1>
            <BorderContext.Provider value={2}>                            {//We surround the footer with a provider that makes sure all the buttons inside by defauly will have 2px borders, unless another, more specific provider tells them otherwise.
                                                                          }
                <Footer />
            </BorderContext.Provider>
        </main>
    );
}
export default App;