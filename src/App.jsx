import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Council from "./screens/Council";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/council" element={<><Navbar /><Council /></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;