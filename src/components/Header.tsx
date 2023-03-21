import React, { useState } from 'react';
import CreatePostModal from './CreatePostModel';


interface HeaderProps {
  isCreatePostPopUpVisible: boolean;
  changeCreatePostPopUpVisiblility: (visible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility }) => {
  const [screenName, setScreenName] = useState('HOME');

  const changePopUpVisibility = () => {
    changeCreatePostPopUpVisiblility(!isCreatePostPopUpVisible);
  };

  const handleCreatePostSubmit = (postText: string) => {
    changeCreatePostPopUpVisiblility(false);
  };

  return (
    <div className="flex" >
      <div className="header-container flex-row flex">
        <div className="header-item-left flex flex-row">
          <div className="screen-name">{screenName}</div>
        </div>
        <div className="header-item-right flex flex-row items-center">
          <div className="border-solid border-black">
            <button className="p-2 border border-gray-300 rounded-lg inline-block px-2 py-2 mr-3" onClick={changePopUpVisibility}>
              <span className='border-solid border-black'>New post</span>
            </button>
          </div>
        </div>
      </div>
      <div className='my-1 flex'>
        <input placeholder='Search here' />
      </div>
      {isCreatePostPopUpVisible && (
        <CreatePostModal
          isOpen={isCreatePostPopUpVisible}
          onClose={() => changeCreatePostPopUpVisiblility(false)}
          onSubmit={handleCreatePostSubmit}
        />
      )}
    </div>
  );
};

export default Header;
