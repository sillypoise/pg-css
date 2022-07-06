import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div style={{ maxInlineSize: "60rem", marginInline: "auto" }}>
            <App />
        </div>
    </React.StrictMode>
);
