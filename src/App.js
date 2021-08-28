import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

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
