import React from 'react';

const Video = ({ title, url }) => (
  <div className="video">
    <h3>{title}</h3>
    <video width="320" height="240" controls autoPlay>
      <source src={url} type="video/mp4" />
     
    </video>
  </div>
);

export default Video;
