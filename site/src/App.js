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
import ButtonPage from "./pages/atoms/Button";
import InputPage from "./pages/atoms/Input";
import StateSelect from "./pages/molecules/StateSelect";
import ButtonListPage from "./pages/molecules/ButtonList";
import HalfBlockPage from "./pages/organisms/HalfBlock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<Demos />} />

            <Route path="/atoms/button" element={<ButtonPage />} />
            <Route path="/atoms/input" element={<InputPage />} />
            <Route path="/molecules/state-select" element={<StateSelect />} />

            <Route path="/molecules/button-list" element={<ButtonListPage />} />

            <Route path="/organisms/half-block" element={<HalfBlockPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
