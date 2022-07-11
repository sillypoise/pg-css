import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div style={{ maxInlineSize: "60rem", marginInline: "auto" }}>
                <App />
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
