import React from 'react';

const McLovin: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-6xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-[600px]"
          src="https://www.youtube.com/embed/4Paif6pD4Ac"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default McLovin;