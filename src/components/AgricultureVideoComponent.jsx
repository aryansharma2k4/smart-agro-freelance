import React from 'react';

const AgricultureVideoComponent = () => {
  return (
    <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('')" }}>
      <img src="" alt="Agriculture Background" className="w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">
          Agriculture Matters to the Future of Bangladesh
        </h2>
        <div className="flex items-center">
          <div className="bg-white rounded-full p-3 mr-4">
            <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-lg text-white italic">Watch the video</span>
        </div>
      </div>
    </div>
  );
}

export default AgricultureVideoComponent;
