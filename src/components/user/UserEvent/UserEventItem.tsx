
import React from "react"

const UserEventItem: React.FC = () => {

    return(
        <div className="flex justify-between">
            <div>
                <img src="logo192.png" alt="" className="h-8 w-8" />
            </div>
            <div className="flex-row" >
                <p className="text-lg text-black px-1">Gaming night with the boys</p>
                <p className="text-xs text-gray-500 px-1"> 11:00 - 16:00</p>
            </div>
            <div>
                <img src="settingsIcon.png" alt="settings" className="h-8 w-8" />
            </div>
        </div>

    );

};

export default UserEventItem;