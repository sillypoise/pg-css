import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div
                className="center"
                style={
                    {
                        "--center-width": "60rem",
                        paddingBlockStart: "var(--space-2xl)",
                        paddingBlockEnd: "var(--space-3xl)",
                    } as React.CSSProperties
                }
            >
                <App />
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
