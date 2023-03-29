import { FC } from "react";

const AlumniGroupModel : FC = () => {

    return (
        <div className="bg-white rounded-lg">
            <p className="text-lg font-bold text-white bg-orange-600 text-center py-2">CREATING A NEW GROUP</p>
            <div className="flex-grow">
                <label className="text-lg font-bold text-slate-400 px-2">Name</label>
                <input type="placeholder" className="border-solid border-2 rounded-md border-gray-400"/>
            </div>
            <div>
                <label className="text-lg font-bold text-slate-400 px-2">Description</label>
                <input type="placeholder" className="border-solid border-2 rounded-md border-gray-400 w-20 h-20"/>
            </div>
            
            <div className="flex justify-center">
                <div className="flex px-2 justify-center">
                    <p className="px-5">Public Group: </p>
                    <input type="checkbox" name="public-group" />
                </div>
                <div className="flex justify-center">
                    <p className="px-5">Private Group: </p>
                    <input type="checkbox" name="private-group" />
                </div>
            </div>
        </div>
    )

}

export default AlumniGroupModel;