import { CalendarIcon } from "@heroicons/react/outline";
import {
  BellIcon,
  //BookmarkIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import noroffLogo from "../../assets/noroff.png";

//type buttons = {};

const Sidebar: FC = () => {
  return (
    <div className="h-screen fixed shadow-sm bg-white pr-5">
      <div className="flex items-center px-3">
        <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2" alt="logo" />
        <span className="sidebar-heading text-lg">Alumni Portal</span>
      </div>
      <ul className="flex-row py-4">
        <li className=" justify-start flex px-4 py-2 hover:bg-gray-200">
          <HomeIcon className="h-6 w-6 text-gray-600" />
          <Link className="px-3 w-full" to={"/"}>
            Home
          </Link>
        </li>
        <li className=" justify-start flex px-4 py-2 hover:bg-gray-200">
          <BellIcon className="h-6 w-6 text-gray-600" />
          <Link className="px-3 w-full" to={"/"}>
            Notifications
          </Link>
        </li>
        <li className=" justify-start flex px-4 py-2 hover:bg-gray-200">
          <FolderIcon className="h-6 w-6 text-gray-600" />
          <Link className="px-3 w-full" to={"/topics"}>
            Topics
          </Link>
        </li>
        <li className=" justify-start flex px-4 py-2 hover:bg-gray-200">
          <UserGroupIcon className="h-6 w-6 text-gray-600" />
          <Link className="px-3 w-full" to={"/groups"}>
            Groups
          </Link>
        </li>
        <li className=" justify-start flex px-4 py-2 hover:bg-gray-200">
          <CalendarIcon className="h-6 w-6 text-gray-600" />
          <Link className="px-3 w-full" to={"/events"}>
            Events
          </Link>
        </li>
      </ul>
      <div className="flex flex-row items-center fixed bottom-2 left-0">
        <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2" alt="logo" />
        <div className="sidebar-heading text-m w-full">
          <Link to={"/user"}>User name</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;