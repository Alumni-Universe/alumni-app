import React, { useState } from 'react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const handlePostTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value);
  };

  const handlePostContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(postTitle, postContent);
    setPostTitle('');
    setPostContent('');
    onClose();
  };

  return (
    <div className={`modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <form onSubmit={handleSubmit} className="bg-white rounded-md p-4 mx-auto mt-16 w-1/2">
        <h2 className="text-xl mb-4">Create a Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={postTitle}
          onChange={handlePostTitleChange}
          className="w-full h-12 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
        />
        <textarea
          placeholder="Content"
          value={postContent}
          onChange={handlePostContentChange}
          className="w-full h-48 py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
        />
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostModal;
