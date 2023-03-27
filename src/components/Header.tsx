//import { useState } from "react";

interface HeaderProps {
  heading: string;
  headerBtnText: string;
  isPopUpVisible?: boolean;
  changePopUpVisibility?: (visible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  heading,
  headerBtnText,
  isPopUpVisible,
  changePopUpVisibility,
}) => {
  //const [screenName, setScreenName] = useState("HOME");

  const togglePopUpVisibility = () => {
    changePopUpVisibility && changePopUpVisibility(!isPopUpVisible);
  };

  //const handleCreatePostSubmit = (postText: string) => {
  //  changePopUpVisibility && changePopUpVisibility(false);
  //};

  return (
    <div className="flex flex-col w-full">
      <div className="header-container flex-row flex justify-between items-center w-full">
        <div className="header-item-left flex flex-row">
          <div className="logo-container pr-2">
            <img src="Noroff Logo" alt="logo" />
          </div>
          <div className="screen-name">{heading}</div>
        </div>
        <div className="header-item-right flex flex-row items-center">
          <div className="border-solid border-black">
            <button
              className="p-2 border border-gray-300 rounded-lg inline-block px-2 py-2 mr-3"
              onClick={togglePopUpVisibility}
            >
              <span className="border-solid border-black">{headerBtnText}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="my-2 flex w-full border rounded-md">
        <input className="w-full" placeholder="Search here" />
      </div>
    </div>
  );
};

export default Header;
