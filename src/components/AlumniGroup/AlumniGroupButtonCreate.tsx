import { FC } from "react";

const AlumniGroupButtonCreate: FC = () => {
  return (
    <div>
      <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-sm">
        <span className="text-sm">Create New</span>
        {/* <img src="add.png" alt="add" className="h-4 w-4 flex" /> */}
      </button>
    </div>
  );
};

export default AlumniGroupButtonCreate;
