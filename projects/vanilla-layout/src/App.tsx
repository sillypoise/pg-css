import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TheBox } from "./pages/TheBox";
import { TheCenter } from "./pages/TheCenter";
import { TheCluster } from "./pages/TheCluster";
import { TheGrid } from "./pages/TheGrid";
import { TheSidebar } from "./pages/TheSidebar";
import TheStack from "./pages/TheStack";

import "./props.css";
import "./reset.css";
import "./styles/App.css";
import "./styles/layout.css";
import "./styles/utils.css";

function App() {
    return (
        <div>
            <header>
                <h4>Every Layout Primitive in Vanilla CSS</h4>
            </header>
            <nav>
                <ul className="cluster" role="list">
                    <li>
                        <Link to="/the-stack">The Stack</Link>
                    </li>
                    <li>
                        <Link to="/the-box">The Box</Link>
                    </li>
                    <li>
                        <Link to="/the-sidebar">The Sidebar</Link>
                    </li>
                    <li>
                        <Link to="/the-cluster">The Cluster</Link>
                    </li>
                    <li>
                        <Link to="/the-center">The Center</Link>
                    </li>
                    <li>
                        <Link to="/the-grid">The Grid</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/the-stack" element={<TheStack />} />
                    <Route path="/the-box" element={<TheBox />} />
                    <Route path="/the-sidebar" element={<TheSidebar />} />
                    <Route path="/the-cluster" element={<TheCluster />} />
                    <Route path="/the-center" element={<TheCenter />} />
                    <Route path="/the-grid" element={<TheGrid />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
