import { UserGroupIcon } from "@heroicons/react/outline";
import { FC } from "react";

const AlumniGroupHeader : FC = () => {

    return (

        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <UserGroupIcon className="h-6 w-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-700">Groups</h2>
            </div>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                New Group
            </button>
        </header>

    )
}

export default AlumniGroupHeader;