import { FC, useState } from "react";
import { IPost } from "../../interfaces/Interfaces";
import { ChatIcon, ThumbUpIcon } from "@heroicons/react/outline";

const timeSince = (date: Date | string) => {
  const parsedDate = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - parsedDate.getTime()) / 1000);

  const intervals: [string, number][] = [
    ["year", Math.floor(seconds / (60 * 60 * 24 * 365))],
    ["month", Math.floor(seconds / (60 * 60 * 24 * 30))],
    ["week", Math.floor(seconds / (60 * 60 * 24 * 7))],
    ["day", Math.floor(seconds / (60 * 60 * 24))],
    ["hour", Math.floor(seconds / (60 * 60))],
    ["minute", Math.floor(seconds / 60)],
  ];

  for (const [key, value] of intervals) {
    if (value > 0) {
      return value === 1
        ? `${value} ${key} ago`
        : `${value} ${key}s ago`;
    }
  }

  return "just now";
};

interface PostItemProps extends IPost {
  commentsCount: number;
}

const PostItem: FC<PostItemProps> = ({
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
  targetUserNavigation,
  commentsCount, // new prop
}) => {
  const timeElapsed = timeSince(lastUpdated);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <article className="bg-white shadow-md mb-4">
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <h4 className="text-sm font-semibold text-gray-600">
                {sender.name}
              </h4>
              <p className="text-gray-600 text-sm">Posted in {postTarget}</p>
            </div>
            <div className="pl-6">
              <p className="text-sm">Posted {timeElapsed}</p>
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
          <h2 className="text-medium font-semibold py-5">{postTitle}</h2>
          <p className="text-gray-700 mt-2 pb-10">{postMessage}</p>
        </div>
        <div className="p-2 border-t border-gray-200 flex justify-between items-center">
        <div className="flex space-x-4">
        <button className="flex items-center text-gray-600 hover:text-blue-600 font-semibold space-x-1">
          <ThumbUpIcon className="h-5 w-5" />
          <span>Like</span>
        </button>
          <button className="flex items-center text-gray-600 hover:text-blue-600 font-semibold space-x-1">
            <ChatIcon className="h-5 w-5" />
            <span>Comment</span>
          </button>
        </div>
        <button className="text-gray-600 hover:text-blue-600 font-semibold">
          {commentsCount} Comment{commentsCount === 1 ? "" : "s"}
        </button>
      </div>
      </div>
    </article>
  );
};

export default PostItem;
