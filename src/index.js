import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./NavBar/NavBar.js";
import Body from "./Parallax/Parallax.js"

ReactDOM.render(
    <React.StrictMode>
        <NavBar />
        <Body />
    </React.StrictMode>,
    document.querySelector("#root")
);
