import React, { FC, useEffect, useState } from 'react';

interface PostProps {
  postTitle: string;
  postContent: string;
  onDelete: () => void;
}

const Post: FC<PostProps> = ({ postTitle, postContent, onDelete }) => {
  const [posts, setPosts] = useState(null);

  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow-md relative w-100 overflow-auto whitespace-pre-wrap break-words">
      <button 
        onClick={onDelete}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
      <h3 className="text-xl font-bold mb-2">{postTitle}</h3>
      <p className="text-gray-700 flex-wrap">{postContent}</p>
    </div>
  );
};

export default Post;
