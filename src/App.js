import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import "../src/style/style.css";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
