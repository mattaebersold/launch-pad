// import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Demos from "./pages/Demos";
import Header from "./components/globals/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<Demos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
