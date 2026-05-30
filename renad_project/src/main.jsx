import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';//for bootstrap design
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for navbar
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<App />
</BrowserRouter>
);