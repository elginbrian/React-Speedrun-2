import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">REACTFLIX</h1>
      <div>
        <button className="bg-white bg-opacity-50 text-black font-medium px-6 py-2 rounded cursor-pointer mr-2">Sign In</button>
        <button className="bg-red-600 font-medium px-6 py-2 rounded cursor-pointer">Login</button>
      </div>
    </div>
  );
};
