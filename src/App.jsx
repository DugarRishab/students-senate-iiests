import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Council from "./screens/Council";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/council"
                        element={
                            <>
                                <Navbar />
                                <Council />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <Navbar />
                                <About />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
