import React, { useState } from 'react';

const CustomTabs = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center mt-5'>
      <div className='bg-zinc-300 rounded-xl opacity-80 p-1'>
        {tabs.map((tab: any, index: number) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === index
                ? 'bg-white rounded-xl text-black'
                : 'text-gray-600'
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