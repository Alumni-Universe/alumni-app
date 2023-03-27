import { UserGroupIcon } from "@heroicons/react/outline";
import { FC } from "react";
import AlumniGroupButtonCreate from "./AlumniGroupButtonCreate";

const AlumniGroupHeader: FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <UserGroupIcon className="h-6 w-6 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-700">Groups</h2>
      </div>
      <AlumniGroupButtonCreate />
    </header>
  );
};

export default AlumniGroupHeader;
