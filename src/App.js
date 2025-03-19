import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";  // Corrected Bootstrap import
import Navbar from "./components/Navbar";  // Ensure this file exists
import Home from "./screens/Home";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;