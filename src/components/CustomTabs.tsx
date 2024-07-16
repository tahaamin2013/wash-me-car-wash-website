import React, { useState } from 'react';

const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full my-4">
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === index
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-2">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default CustomTabs