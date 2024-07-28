import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">REACTFLIX</h1>
      </Link>

      <div>
        <Link to="/sign-in">
          <button className="bg-white bg-opacity-50 text-black font-medium px-6 py-2 rounded cursor-pointer mr-2">Sign Up</button>
        </Link>

        <Link to="/login">
          <button className="bg-red-600 font-medium px-6 py-2 rounded cursor-pointer">Login</button>
        </Link>
      </div>
    </div>
  );
};
