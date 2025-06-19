import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const getStyles = ({ isActive }) => {
        return isActive
            ? "flex items-center p-2 bg-indigo-100 text-indigo-800 rounded-md"
            : "flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md";
    }

  return (
    <aside className="flex flex-col gap-3 p-5 w-45 h-screen bg-gray-50  border-r-2 border-gray-100 ">
      <NavLink className={getStyles} to="/">
        <span className="material-icons-outlined">home</span>
        <span className="text-gray-700 px-2 ">Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-icons-outlined">archive</span>
        <span className="text-gray-700 px-2 ">Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/important">
       <span className="material-icons-outlined">star</span>
       <span className="text-gray-700 px-2 ">Important</span>
        </NavLink>
      <NavLink className={getStyles} to="/bin">
      <span className="material-icons-outlined">delete</span>
      <span className="text-gray-700 px-2 ">Bin</span></NavLink>
    </aside>
  );
};

export default Sidebar;
