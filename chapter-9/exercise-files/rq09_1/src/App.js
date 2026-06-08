//Listing 9.16 from React Quickly - Uncontrolled address form with submit
//Address form like listing 9.15 - but with uncontrolled inputs. 
//Many things get less complex, except the submit handler. That gets more complex.

const URL = "//salespower.invalid/api/address";

function Address() {
    /*The primary change here is in the submit handler, where we extract the current data
    directly from the form rather than reading it from the local component state as before*/
    const onSubmit = (evt) => {
        const data = Object.fromEntries(
            Array.from(evt.target.elements)
                .slice(0, 6)
            .map((input) => [input.name, input.value])
        );
        fetch(URL, { 
            method: "POST",
            body: JSON.stringify(data),
        });
        evt.preventDefault();
    };
    return (
        <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <label>
                Address line 1:
                <input name="address1" />
            </label>
            <label>
                Address line 2:
                <input name="address2" />
            </label>
            <label>
                Zip:
                <input name="zip" />
            </label>
            <label>
                City:
                <input name="city" />
            </label>
            <label>
                State:
                <input name="state" />
            </label>
            <label>
                Country:
                <input name="country" />
            </label>
            <button>Submit</button>/button>
        </form>
    );
}
export default Address;