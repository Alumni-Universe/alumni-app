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
import ReactSelect from "react-select";
import { components } from "react-select";

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

  const handleGroupChange = (selectedOption: any) => {
    setSelectedGroup(selectedOption.groupId);
  };
  
  const handleTopicChange = (selectedOption: any) => {
    setSelectedTopic(selectedOption.topicId);
  };

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <span>▼</span>
      </components.DropdownIndicator>
    );
  };
  
  const Option = (props: any) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            className="px-2 mx-2"
            type="radio"
            checked={props.isSelected}
            onChange={() => null} // We don't need to handle the change event here, react-select takes care of it.
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
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
    const now = new Date();
    const nowUtc = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    const newPost: IPost = {
      postTitle: postTitle,
      lastUpdated: nowUtc,
      postMessage: postContent,
      postTarget: postTarget,
      senderId: authenticatedUser?.userId ?? "",
      replyParentId: null,
      targetUser: null,
      targetGroup: selectedGroup ?? null,
      targetTopic: selectedTopic ?? null,
      targetEvent: null,
      sender: {
        userId: authenticatedUser?.userId ?? "",
        name: authenticatedUser?.name ?? "",
      },
    };
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
          <ReactSelect
            className="w-40 mx-2"
            placeholder="Groups"
            value={alumniGroups.find((group) => group.groupId === selectedGroup)}
            onChange={(group) => handleGroupChange(group)}
            options={alumniGroups}
            components={{ Option, DropdownIndicator }}
            getOptionLabel={(group) => group.name}
            getOptionValue={(group) => group.groupId.toString()}
          />
          <ReactSelect
            className="w-40"
            placeholder="Topics"
            value={topics.find((topic) => topic.topicId === selectedTopic)}
            onChange={(topic) => handleTopicChange(topic)}
            options={topics}
            components={{ Option, DropdownIndicator }}
            getOptionLabel={(topic) => topic.name}
            getOptionValue={(topic) => topic.topicId.toString()}
          />
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
