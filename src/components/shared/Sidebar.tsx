import React, { FC } from "react";
import { Link } from "react-router-dom";
import noroffLogo from "../../assets/noroff.png";

//type buttons = {};

const Sidebar: FC = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex items-center px-3">
        <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2" alt="logo" />
        <span className="sidebar-heading text-lg">Alumni Portal</span>
      </div>
      <ul className="flex-row">
        <li className="w-full text-left px-4 py-2 hover:bg-gray-200 mt-2">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="w-full text-left px-4 py-2 hover:bg-gray-200">
          <Link to={"/"}>Notifications</Link>
        </li>
        <li className="w-full text-left px-4 py-2 hover:bg-gray-200">
          <Link to={"/topics"}>Topics</Link>
        </li>
        <li className="w-full text-left px-4 py-2 hover:bg-gray-200">
          <Link to={"/groups"}>Groups</Link>
        </li>
        <li className="w-full text-left px-4 py-2 hover:bg-gray-200">
          <Link to={"/events"}>Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
