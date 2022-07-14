import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="center max-is-[60rem] pbs-2xl pbe-3xl">
                <App />
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
