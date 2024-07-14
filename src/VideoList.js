import React from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const VideoList = ({ videos }) => {
  const { t } = useTranslation();

  return (
    <div className="video-list">
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <ReactPlayer url={video.url} width="100%" height="auto" controls />
            <h3>{video.title}</h3>
            <p>{`${video.type} - ${video.level} - ${video.date} - ${video.views} - ${video.time}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;