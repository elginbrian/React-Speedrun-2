import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-800">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      ></img>
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Login</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" />
              <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" />
              <button className="bg-red-600 py-3 my-6 px-2 rounded">Continue</button>

              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>

              <p className="mt-8">
                <span className="text-gray-400">Not yet subscribed to Reactflix?</span> <Link to="/sign-in"> Sign-Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
