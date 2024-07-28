import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { SignUp } from "./page/SignUp";
import { Login } from "./page/Login";
import { AuthContextProvider } from "./context/AuthContext";
import { Account } from "./page/Account";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App text-white">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
