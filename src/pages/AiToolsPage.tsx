import React from 'react';

const AiToolsPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Recommended AI Tools
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Here is a curated list of AI tools that can help streamline workflows, enhance creativity, and drive innovation.
        </p>
        <ul className="space-y-6">
          {/* Example list item. Copy and paste this block to add more tools. */}
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">&#10148;</span>
            <div>
              <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
                Perplexity AI
              </a>
              <p className="text-gray-600">A powerful conversational search engine that provides direct answers with cited sources.</p>
            </div>
          </li>

          {/* Example list item. */}
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">&#10148;</span>
            <div>
              <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
                ChatGPT
              </a>
              <p className="text-gray-600">A versatile language model for a wide range of tasks, from writing and brainstorming to coding assistance.</p>
            </div>
          </li>

          {/* Example list item. */}
           <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">&#10148;</span>
            <div>
              <a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
                Midjourney
              </a>
              <p className="text-gray-600">A leading AI image generator that creates stunning visuals from text prompts.</p>
            </div>
          </li>
          
          {/* Template list item. */}
           <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">&#10148;</span>
            <div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
                Tool Name
              </a>
              <p className="text-gray-600">A brief description of what this tool does.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AiToolsPage;
