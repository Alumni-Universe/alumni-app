import React, { useState } from 'react';
import noroffLogo from '../assets/noroff.png';

const Sidebar: React.FC = () => {
    return (
      <div className=" bg-gray-100 h-screen">
        <div className='flex items-center'>
            <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2"/>
            <span className='sidebar-heading text-xs'>Alumni Portal</span>
        </div>
        <div className="py-4">
          <div className="flex justify-between py-2 px-1">
            <img src="logo192.png" alt="" className="h-7 w-7" />
            <button className="w-full text-left px-2 hover:bg-gray-300"> Search </button>
          </div>
          <div className="flex justify-between py-2 px-1">
            <img src="logo192.png" alt="" className="h-7 w-7" />
            <button className="w-full text-left px-2 hover:bg-gray-300"> Notification</button>
          </div>
          <div className="flex justify-between py-2 px-1">
            <img src="logo192.png" alt="" className="h-7 w-7" />
            <button className="w-full text-left px-2 hover:bg-gray-300"> Topics</button>
          </div>
          <div className="flex justify-between py-2 px-1">
            <img src="logo192.png" alt="" className="h-7 w-7" />
            <button className="w-full text-left px-2 hover:bg-gray-300"> Groups</button>
          </div>
          <div className="flex justify-between py-2 px-1">
            <img src="logo192.png" alt="" className="h-7 w-7" />
            <button className="w-full text-left px-2 hover:bg-gray-300"> Events</button>
          </div>
          <div className="flex justify-between py-2 px-1">
            <img src="logo192.png" alt="" className="h-7 w-7" />
            <button className="w-full text-left px-2 hover:bg-gray-300"> Schedule</button>
          </div>
        </div>
      </div>
    );
  };

  export default Sidebar;