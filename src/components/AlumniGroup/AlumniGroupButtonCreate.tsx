import { FC } from "react";

const AlumniGroupButtonCreate: FC = () => {
  return (
    <div>
      <button className="bg-white text-gray-600 border border-gray-600 py-2 px-4 hover:bg-gray-100 flex items-center">
        <span className="text-sm">Create New</span>
        {/* <img src="add.png" alt="add" className="h-4 w-4 flex" /> */}
      </button>
    </div>
  );
};

export default AlumniGroupButtonCreate;
