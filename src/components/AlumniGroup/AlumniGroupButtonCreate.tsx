import { FC } from "react";

const AlumniGroupButtonCreate : FC = () => {

    return(
        <div>
            <button className="flex bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded items-center justify-end">
                <span className="text-sm">Create New</span>
                <img src="add.png" alt="add" className="h-4 w-4 flex" />
            </button>
        </div>
    )
}

export default AlumniGroupButtonCreate;