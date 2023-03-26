import { FC, useState } from 'react';
import { IPost } from '../../interfaces/Interfaces';

const hoursSince = (date: Date | string) => {
    const parsedDate = new Date(date);
    const now = new Date();
    const diffInMilliseconds = now.getTime() - parsedDate.getTime();
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
    return Math.round(diffInHours);
  };
 
const PostItem : FC<IPost> = ({ 
    postId, 
    postTitle,
    lastUpdated, 
    sender, 
    postTarget, 
    postMessage, 
    senderId, 
    replyParentId, 
    targetEvent, 
    targetGroup, 
    targetTopic, 
    targetUser, 
    targetEventNavigation, 
    targetGroupNavigation, 
    targetTopicNavigation, 
    targetUserNavigation 
}) => {

    const hoursElapsed = hoursSince(lastUpdated);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <article className="bg-white shadow-md rounded-lg mb-4">
            <div className="p-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-600">{sender.name}</h4>
                            <p className="text-gray-600 text-sm">Posted in {postTarget}</p>
                        </div>
                            <div className="pl-6">
                            <p className="text-sm">Posted {hoursElapsed} hours ago</p>
                        </div>
                    </div>
                    <div className="flex-none">
                        <button onClick={toggleDropdown}>
                            <img
                            src="settingsIcon.png"
                            alt="settings"
                            className="h-6 w-6 text-center"
                            />
                        </button>
                        {dropdownVisible && (
                            <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <p className="text-sm">Turn off notification</p>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <p className="text-sm">Share</p>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <p className="text-sm text-red-500">Report content</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-medium font-semibold">{postTitle}</h2>
                    <p className="text-gray-700 mt-2">{postMessage}</p>
                </div>
            </div>
        </article>
    )
}

export default PostItem;