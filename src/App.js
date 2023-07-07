import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
