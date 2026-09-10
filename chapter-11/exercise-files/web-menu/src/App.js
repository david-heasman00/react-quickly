import Context from "./Context.js";
import Menu from "./Menu";
import "./style.css";

function App() {
  const menuLinks = [
    { title: "Home", href: "/", icon: "home"},
    { title: "Services", href: "/services", icon: "services" },
    { title: "Pricing", href: "/pricing", icon: "pricing"},
    { title: "Blog", href: "/blog", icon: "blog"}
  ];
  return (
    <Context.Provider value={menuLinks}>
      <header>
        <Menu />
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </Context.Provider>
  );
}

export default App;
