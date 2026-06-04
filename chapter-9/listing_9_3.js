//Listing 9.3 from React Quickly - Ticket number input

/*
An input form that showcases masked input - where a mask is given as the user is typing, guiding
them to type in the correct format. This example only takes input in AAA-AAA form where the 
character is alphanumeric.
*/

import { useState } from "react";
function TicketNumber() {
    const [ticketNumber, setTicketNumber] = useState("");
    const onChange = (evt) => {
        const [first = "", second = ""] = evt.target.value
            .replace(/[^0-9a-z]/gi, "")
            .slice(0, 6)
            .match(/.{0,3}/g);
        const value = first.length === 3
            ? `${first}-${second}`
            : first;
        setTicketNumber(value.toUpperCase());
    };
    const isValid = ticketNumber.length === 7;
    return (
        <form style={{ display: "flex" }}>
            <label>
                Ticket number:
                <input  
                    value={ticketNumber}
                    onChange={onChange}
                    placeholder="E.g. R1S-T2U"
                />
            </label>
            <span>{isValid ? "✅" : "❌"}</span>
        </form>
    );
}
function App() {
    return <TicketNumber />;
}
export default App;
