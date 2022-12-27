import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/css/style.css";
// import "https://kit.fontawesome.com/cc61d32cd2.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
);

