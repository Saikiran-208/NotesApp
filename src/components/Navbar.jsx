import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <header className="flex px-5 py-2 gap-2 border-b-2 border-gray-100 sticky top-0 bg-white z-10">
      <div className="w-11 h-11">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <h1 className="text-indigo-800 text-4xl font-bold">NoteIt</h1>
    </header>
  );
};

export default Navbar;
