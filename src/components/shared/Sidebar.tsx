import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import noroffLogo from '../../assets/noroff.png';

type buttons = {
  
}

const Sidebar : FC = () => {
    return (
      <div className="fixed top-0 left-0 h-screen w-1/5 bg-gray-100">
        <div className='flex flex-row items-center'>
            <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2"/>
            <span className='sidebar-heading text-lg'>Alumni Portal</span>
        </div>
        <ul className="flex-grow py-4">
          <li className="w-full text-left px-4 py-2 hover:bg-gray-200"><Link to={'/'}>Home</Link></li>
          <li className="w-full text-left px-4 py-2 hover:bg-gray-200"><Link to={'/'}>Notifications</Link></li>
          <li className="w-full text-left px-4 py-2 hover:bg-gray-200"><Link to={'/topics'}>Topics</Link></li>
          <li className="w-full text-left px-4 py-2 hover:bg-gray-200"><Link to={'/groups'}>Groups</Link></li>
          <li className="w-full text-left px-4 py-2 hover:bg-gray-200"><Link to={'/events'}>Events</Link></li>
        </ul>
        <div className='flex flex-row items-center fixed bottom-2 left-0'>
            <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2"/>
            <span className='sidebar-heading text-m'><Link to={'/user'}>User name</Link></span>
        </div>
      </div>
    );
  };

  export default Sidebar;