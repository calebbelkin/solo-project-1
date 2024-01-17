import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App.jsx";

import { createRoot } from "react-dom/client";
import { render } from "react-dom";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
