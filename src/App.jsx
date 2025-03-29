import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Council from "./screens/Council";
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/council" element={<Council />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;