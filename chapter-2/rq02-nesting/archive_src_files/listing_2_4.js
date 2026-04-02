import React from "react";
import ReactDOM from "react-dom/client";

const link1 = React.createElement(
    "a", { href: "//react.dev "}, "Read more about React"
);
const p1 = React.createElement(
    "p", null, link1
);

const link2 = React.createElement(
    "a", { href : "//react.dev" }, "Read more about React"
);
const p2 = React.createElement(
    "p", null, link2
);

const link3 = React.createElement(
    "a", { href: "//react.dev" }, "Read more about React"
);
const p3 = React.createElement(
    "p", null, link3
);

const group = React.createElement("p", null, p1, p2, p3);
const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);