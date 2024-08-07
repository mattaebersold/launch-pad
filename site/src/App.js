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
import SelectPage from "./pages/atoms/Select";
import CheckboxPage from "./pages/atoms/Checkbox";
import RadioGroupPage from "./pages/atoms/RadioGroup";

import StateSelect from "./pages/molecules/StateSelect";
import ButtonListPage from "./pages/molecules/ButtonList";
import MenuPage from "./pages/molecules/Menu";

import HalfBlockPage from "./pages/organisms/HalfBlock";
import DropdownMenuPage from "./pages/organisms/DropdownMenu"
import GridPage from "./pages/organisms/Grid"

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
            <Route path="/atoms/select" element={<SelectPage />} />
            <Route path="/atoms/checkbox" element={<CheckboxPage />} />
            <Route path="/atoms/radio-group" element={<RadioGroupPage />} />

            <Route path="/molecules/state-select" element={<StateSelect />} />
            <Route path="/molecules/button-list" element={<ButtonListPage />} />
            <Route path="/molecules/menu" element={<MenuPage />} />

            <Route path="/organisms/dropdown-menu" element={<DropdownMenuPage />} />
            <Route path="/organisms/half-block" element={<HalfBlockPage />} />
            <Route path="/organisms/grid" element={<GridPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
