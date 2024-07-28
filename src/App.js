import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App text-white">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<h1>Sign In</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
