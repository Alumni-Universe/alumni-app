import { FC } from "react";

const AlumniGroupDetailsHeader : FC = () => {

    return (
        <div className="shadow-sm flex justify-between p-4 bg-white">
            <div className="flex">
            <div className="flex px-2 justify-center">
                <p className="px-5">Public Group: </p>
                <input type="checkbox" name="public-group" />
            </div>
            <div className="flex justify-center">
                <p className="px-5">Private Group: </p>
                <input type="checkbox" name="private-group" />
            </div>
            </div>
            <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-sm">
                <span className="text-sm">Invite</span>
                {/* <img src="add.png" alt="add" className="h-4 w-4 flex" /> */}
            </button>
        </div>
    )

}

export default AlumniGroupDetailsHeader;