//Listing 6.3 - React Quickly - Side effect executed in hook
import { useEffect } from "react";
function BlogPost({ title, body}) {
    useEffect(() => {
        document.title = title;             //The Side effect (or effect) in useEffect sets the document title to the value of the title property
    }, [title]) ;                           //Putting only the title in the dependency array ensures the docuemtn title is updated *only* when the post title is
    return (
        <article>
            <h1>{title}</h1>
            {body}
        </article>
    );
}
function App() {
    return (
        <main>
            <BlogPost title="First post" body={
                <p>Welcome to my cool website.</p>
            } />
        </main>
    );
}

export default App;