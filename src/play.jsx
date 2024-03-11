import React from 'react';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl;

  return (
    <div>
      {videoUrl ? (
        <iframe
          src={videoUrl}
          title="Video Player"
          width="100%"
          height="500"
          
          allowFullScreen
         
        />
      ) : (
        <div>No video URL provided</div>
      )}
    </div>
  );
};

export default VideoPlayer;