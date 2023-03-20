import React, { useState } from 'react';
import CreatePostModal from './post/CreatePostModel';
import UserProfile from '../pages/UserProfile';
import noroffLogo from '../assets/noroff.png';


interface HeaderProps {
  heading: string,
  headerBtnText: string,
  isCreatePostPopUpVisible?: boolean;
  changeCreatePostPopUpVisiblility?: (visible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ heading, headerBtnText, isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility }) => {
  const [screenName, setScreenName] = useState('HOME');

  const changePopUpVisibility = () => {
    changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(!isCreatePostPopUpVisible);
  };

  const handleCreatePostSubmit = (postText: string) => {
    changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(false);
  };

  return (
    /*<div className="header-container flex-row flex justify-between items-center">
      <div className="header-item-left flex flex-row">
        <div className="logo-container pr-2">
          <img src="C:\Users\magom\OneDrive\Skrivebord\noroff.png" />
        </div>
        <div className="screen-name">{screenName}</div>
      </div>*/
    <div className='flex flex-row'>
      <div className="header-container flex-row flex justify-between items-center">
        <div className="header-item-left flex flex-row">
          <div className="logo-container pr-2">
            <img src="Noroff Logo" />
          </div>
          <div className="screen-name">{heading}</div>
        </div>
        <div className="header-item-right flex flex-row items-center">
          <div className="border-solid border-black">
            <button className="p-2 border border-gray-300 rounded-lg inline-block px-2 py-2 mr-3" onClick={changePopUpVisibility}>
              <span className='border-solid border-black'>{headerBtnText}</span>
            </button>
          </div>
        </div>

      </div>
      <div className='my-2 flex'>
        <input placeholder='Search here' />
      </div>
      {isCreatePostPopUpVisible && (
        <CreatePostModal
          isOpen={isCreatePostPopUpVisible}
          onClose={() => changeCreatePostPopUpVisiblility && changeCreatePostPopUpVisiblility(false)}
          onSubmit={handleCreatePostSubmit}
        />
      )}
    </div>
  );
};

export default Header;
