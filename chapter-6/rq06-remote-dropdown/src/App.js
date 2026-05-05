//Listing 6.4 from React Quickly - State updated from property
import { useEffect, useState } from "react";
function EmailInput({ value }) {
    const [email, setEmail] = useState("");                         //Create a new state value but don't initialize it to anything...yet

    useEffect(() => setEmail(value), [value]);                      //...because on every render where the property value changes, we'll
                                                                    //(re)set the email state value to the property. We remember to add
                                                                    //a dependency array, which is only the value property.
    return (
        <label>
            Email address:
            <input 
                type="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}      //Finally we update the state value every time the input changes
            />
        </label>
    );
}
const EMAIL1 = "daffyduck@looneytunes.invalid";
const EMAIL2 = "bugsbunny@looneytunes.invalid";
const EMAIL3 = "elmerfudd@looneytunes.invalid";
function App() {
    const [defaultEmail, setDefaultEmail] = useState(EMAIL1);
    return (
        <main>
            <button onClick={() => setDefaultEmail(EMAIL1)}>Use {EMAIL1}</button>
            <br />
            <button onClick={() => setDefaultEmail(EMAIL2)}>Use {EMAIL2}</button>
            <br />
            <button onClick={() => setDefaultEmail(EMAIL3)}>USe {EMAIL3}</button>
            <br />
            <EmailInput value={defaultEmail} />
        </main>
    );
}
export default App;