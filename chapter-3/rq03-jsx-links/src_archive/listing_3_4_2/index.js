import React from "react";
import { createRoot } from "react-dom/client";
import DateTimeNow from "./App";

createRoot(document.getElementById("root"))
    .render(React.createElement(DateTimeNow));