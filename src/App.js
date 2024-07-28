import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";

function App() {
  return (
    <div className="App text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<h1>Sign In</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </div>
  );
}

export default App;
