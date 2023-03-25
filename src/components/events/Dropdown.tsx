// DropdownMenu.tsx
import React, { useState } from "react";

interface DropdownMenuProps {
    children: React.ReactNode;
    onDelete?:() => void 
  }



const DropdownMenu: React.FC<DropdownMenuProps> = ({ onDelete }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        &#x22EE;
      </button>
      {showDropdown && (
        <div
          className="absolute right-0 mt-8 w-32 bg-white border border-gray-200 rounded-md shadow-md"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
