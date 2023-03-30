import { useState } from "react";
import TopicsList from "./TopicsList";

const CreateTopicsModal: React.FC = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateTopic = () => {
    if (inputValue.trim() !== "" && !topics.includes(inputValue)) {
      setTopics([...topics, inputValue]);
      setInputValue("");
      setShowPopup(false);
    }
  };

  const renderPopup = () => (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded shadow-lg z-10">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search or create topic"
        className="border border-gray-300 p-2 rounded w-full"
      />
      <button
        onClick={handleCreateTopic}
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600"
      >
        Create
      </button>
    </div>
  );

  return (
    <>
      <div className="fixed top-4 right-4">
        <button onClick={() => setShowPopup(true)} className="bg-white text-gray-600 border border-gray-600 py-2 px-4 hover:bg-gray-100 flex items-center">
          Create Topic
        </button>
        {showPopup && renderPopup()}
      </div>
      <TopicsList topics={topics} setTopics={setTopics} />
    </>
  );
};

export default CreateTopicsModal;
