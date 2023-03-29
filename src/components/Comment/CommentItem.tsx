import React, { FC } from "react";
import { PostReplyDto } from "../../interfaces/Dtos";

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
      return value === 1 ? `${value} ${key} ago` : `${value} ${key}s ago`;
    }
  }

  return "just now";
};

const CommentItem: FC<PostReplyDto> = ({
  postId,
  lastUpdated,
  sender,
  postTarget,
  postMessage,
}) => {
  const timeElapsed = timeSince(lastUpdated);
  // You can add more styling or information as needed
  return (
    <div className="p-2 bg-gray-100 rounded">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <h4 className="text-sm font-semibold text-gray-800">
              {sender.name}
            </h4>
          </div>
          <div className="pl-6">
            <p className="text-sm">Posted {timeElapsed}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 mt-2 pb-10">{postMessage}</p>
      </div>
    </div>
  );
};

export default CommentItem;
