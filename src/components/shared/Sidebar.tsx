import React, { FC } from "react";
import { Link } from "react-router-dom";
import noroffLogo from "../../assets/noroff.png";

const Sidebar: FC = () => {
  return (
    <div className="bg-gray-100 h-screen pl-3 w-1/5 fixed top-0">
      <div className="flex flex-row items-center">
        <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2" alt="logo" />
        <span className="sidebar-heading text-xs">Alumni Portal</span>
      </div>
      <ul className="flex-grow py-4">
        <li className="w-full text-left px-4 py-2 hover:bg-gray-200">
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
