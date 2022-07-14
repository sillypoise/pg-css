import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div style={{ maxInlineSize: "60rem", marginInline: "auto" }}>
                <App />
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
