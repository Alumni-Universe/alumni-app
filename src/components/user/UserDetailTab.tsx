import React, { useState } from "react";

type TabProps = {
  heading: string;
  tabs: {
    title: string;
    content: React.ReactNode;
  }[];
};

const UserDetailTab: React.FC<TabProps> = ({ heading, tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
    <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
    <div className="flex gap-2 border-b border-gray-300">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`text-sm font-medium tracking-wide uppercase transition-all duration-200 py-2 px-4 ${
            index === activeTabIndex
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="mt-4">{tabs[activeTabIndex].content}</div>
  </div>
  );
};

export default UserDetailTab;
