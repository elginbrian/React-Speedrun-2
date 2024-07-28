import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      alert("logged out successfully");
      navigate("/");
      console.log("User logged out");
    } catch (err) {
      console.log("Error logging out", err);
      alert("Failed to log out");
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">REACTFLIX</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="bg-white bg-opacity-50 text-black font-medium px-6 py-2 rounded cursor-pointer mr-2">Account</button>
          </Link>

          <Link>
            <button onClick={handleLogout} className="bg-red-600 font-medium px-6 py-2 rounded cursor-pointer">
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/sign-in">
            <button className="bg-white bg-opacity-50 text-black font-medium px-6 py-2 rounded cursor-pointer mr-2">Sign Up</button>
          </Link>

          <Link to="/login">
            <button className="bg-red-600 font-medium px-6 py-2 rounded cursor-pointer">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};
