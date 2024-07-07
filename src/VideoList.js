import React from 'react';
import ReactPlayer from 'react-player';

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      <h2>Tutorials</h2>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <ReactPlayer url={video.url} width="100%" height="auto" controls="true" />
            <h3>{video.title}</h3>
            <p>{video.type} - {video.level} - {video.date} - {video.views} - {video.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
