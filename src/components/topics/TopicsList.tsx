import React from "react";

interface TopicsListProps {
  topics: string[];
  setTopics: React.Dispatch<React.SetStateAction<string[]>>;
}

const TopicsList: React.FC<TopicsListProps> = ({ topics, setTopics }) => {
  const handleDeleteTopic = (topic: string) => {
    setTopics(topics.filter((t) => t !== topic));
  };

  const handleUpdateTopic = (oldTopic: string, newTopic: string) => {
    setTopics(topics.map((t) => (t === oldTopic ? newTopic : t)));
  };

  return (
    <div className="mt-4">
      {topics.map((topic, index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <div>{topic}</div>
          <div>
            <button
              onClick={() => handleUpdateTopic(topic, "Updated Topic")} // Replace "Updated Topic" with the new topic value from an input or any other source
              className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded hover:bg-yellow-600"
            >
              Update
            </button>
            <button
              onClick={() => handleDeleteTopic(topic)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
