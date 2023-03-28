import React, { FC, useContext, useState } from "react";
import { AlumniGroupContext } from "../../contexts/AlumniGroupContext";
import { AlumniUserContext } from "../../contexts/AlumniUserContext";
import { PostContext } from "../../contexts/PostContext";
import { TopicContext } from "../../contexts/TopicContext";
import { IPost } from "../../interfaces/Interfaces";
import { AlumniGroupContextType } from "../../types/AlumniGroupContextType";
import { AlumniUserContextType } from "../../types/AlumniUserContextType";
import { PostContextType } from "../../types/PostContextType";
import { TopicContextType } from "../../types/TopicContextType";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const CreatePostModal: FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const { postPost } = useContext(PostContext) as PostContextType;
  const { authenticatedUser } = useContext(AlumniUserContext) as AlumniUserContextType;
  const { alumniGroups } = useContext(AlumniGroupContext) as AlumniGroupContextType;
  const { topics } = useContext(TopicContext) as TopicContextType;
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(alumniGroups[0]?.groupId ?? null);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]?.topicId ?? null);

  const handlePostTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostTitle(event.target.value);
  };

  const handlePostContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostContent(event.target.value);
  };

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(parseInt(event.target.value));
  };
  
  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(postTitle, postContent);
    let postTarget = "";
    if (selectedGroup) {
      postTarget = "group";
    } else if (selectedTopic) {
      postTarget = "topic";
    }
    const newPost: IPost = {
      postTitle: postTitle,
      lastUpdated: new Date,
      postMessage: postContent,
      postTarget: postTarget,
      senderId: authenticatedUser?.userId ?? "",
      replyParentId: null,
      targetUser: null,
      targetGroup: selectedGroup ?? null,
      targetTopic: selectedTopic ?? null,
      targetEvent: null,
      sender: { userId: authenticatedUser?.userId ?? "", name: authenticatedUser?.name ?? "" }
    }
    postPost(newPost);
    setPostTitle("");
    setPostContent("");
    onClose();
  };

  return (
    <div
      className={`modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md p-4 mx-auto mt-16 w-1/2"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">Create a Post</h2>
          <div className="flex">
            <label htmlFor="group-select" className="mr-1 font-semibold px-1 py-1">Groups:</label>
            <select
              value={selectedGroup}
              onChange={handleGroupChange}
              className="border border-gray-300 rounded-lg px-2 py-1 mr-2"
            >
              {alumniGroups.map((group) => (
                <option key={group.groupId} value={group.groupId}>
                  {group.name}
                </option>
              ))}
            </select>
            <label htmlFor="topic-select" className="mr-1 font-semibold px-1 py-1">Topics:</label>
            <select
              value={selectedTopic}
              onChange={handleTopicChange}
              className="border border-gray-300 rounded-lg px-2 py-1"
            >
              {topics.map((topic) => (
                <option key={topic.topicId} value={topic.topicId}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>
        </div>
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
