import { FC, useContext, useState } from "react";
import { IPost } from "../../interfaces/Interfaces";
import { ChatIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ThumbUpIcon as SolidThumbUpIcon } from "@heroicons/react/solid";
import CommentList from "./../Comment/CommentList";
import { PostContext } from "../../contexts/PostContext";
import { PostContextType } from "../../types/PostContextType";
import { PostReplyDto } from "../../interfaces/Dtos";
import { AlumniUserContext } from "../../contexts/AlumniUserContext";
import { AlumniUserContextType } from "../../types/AlumniUserContextType";

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

const PostItem: FC<IPost> = ({
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
  inverseReplyParent,
}) => {
  const { postPost } = useContext(PostContext) as PostContextType;
  const { authenticatedUser } = useContext(AlumniUserContext) as AlumniUserContextType;
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showReplyField, setShowReplyField] = useState(false);
  const [postReply, setPostReply] = useState("");

  const timeElapsed = timeSince(lastUpdated);

  const handlePostReplyChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostReply(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleReplyField = () => {
    setShowReplyField(!showReplyField);
  };

  const handleReply = () => {
    const now = new Date();
    const nowUtc = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    const newReply: PostReplyDto = {
      lastUpdated: nowUtc,
      postTitle: "",
      postMessage: postReply,
      postTarget: "post",
      senderId: authenticatedUser?.userId ?? "",
      replyParentId: postId ?? null,
      targetUser: senderId,
      targetGroup: null,
      targetTopic: null,
      targetEvent: null,
      sender: {userId: authenticatedUser?.userId ?? "", name: authenticatedUser?.name ?? ""}
    }
    postPost(newReply);
    setPostReply("");
    // Send the reply to the database
    // You can implement this function based on your application logic and backend API
  };

  // Add a new state variable called `liked` and a function to update it called `setLiked`
  const [liked, setLiked] = useState(false);

  // Function to toggle the `liked` state
  const toggleLike = () => {
    setLiked(!liked);
    console.log(inverseReplyParent?.length);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <article className="bg-white shadow-md mb-4">
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
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
            <button
              onClick={toggleLike}
              className={`flex items-center font-semibold space-x-1 ${
                liked ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {liked ? (
                <SolidThumbUpIcon
                  className={`h-5 w-5 ${liked ? "text-blue-600" : ""}`}
                />
              ) : (
                <ThumbUpIcon
                  className={`h-5 w-5 ${liked ? "text-blue-600" : ""}`}
                />
              )}
              <span>Like</span>
            </button>
            <button 
              className="flex items-center text-gray-600 hover:text-blue-600 font-semibold space-x-1"
              onClick={toggleReplyField}
            >
              <ChatIcon className="h-5 w-5" />
              <span>Comment</span>
            </button>
          </div>
          <button
            className="text-gray-600 hover:text-blue-600 font-semibold"
            onClick={toggleComments}
          >
            {inverseReplyParent?.length} Comment
            {inverseReplyParent?.length === 1 ? "" : "s"}
          </button>
        </div>
      </div>
      {showComments && <CommentList comments={inverseReplyParent || []} />}
      {showReplyField && (
        <div className="p-2 border-t border-gray-200 relative">
            <textarea
              className="w-full border rounded p-2"
              placeholder="Write a comment..."
              rows={3}
              maxLength={500}
              value={postReply}
              onChange={handlePostReplyChange}
            ></textarea>
            <button
              className="bg-gray-500 text-white hover:bg-blue-600 font-semibold px-4 py-2 rounded mt-2 absolute bottom-5 right-4"
              onClick={handleReply}
            >
              Post
            </button>
          </div>
      )}
    </article>
  );
};

export default PostItem;
