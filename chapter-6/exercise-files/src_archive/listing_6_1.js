import { useState, useEffect } from "react";
function RemoteDropdown() {
    const [options, setOptions] = useState([]); //state holds the values once the options have been fetched - notice its an array in there
    //Note syntax of useEffect - we wrap the return of useEffect in a function
    useEffect(() => {
        fetch("//www.swapi.tech/api/people")
            .then((res) => res.json())
            .then((data) => data.results)
            .then((characters) => characters.map(({ name }) => name))
            .then((names) => setOptions(names));
    }, []);
    return (
        <select>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
}
function App() {
    return <RemoteDropdown />;
}
export default App;