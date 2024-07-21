// import logo from "./logo.svg";
import "./App.css";

import '@radix-ui/themes/styles.css';

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Demos from "./pages/Demos";
import Header from "./components/globals/Header";

// pages
import ButtonPage from "./pages/primitives/Button";
import InputPage from "./pages/primitives/Input";
import ButtonListPage from "./pages/components/ButtonList";
import HalfBlockPage from "./pages/blocks/HalfBlock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<Demos />} />

            <Route path="/primitives/button" element={<ButtonPage />} />
            <Route path="/primitives/input" element={<InputPage />} />

            <Route path="/components/button-list" element={<ButtonListPage />} />

            <Route path="/blocks/half-block" element={<HalfBlockPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
