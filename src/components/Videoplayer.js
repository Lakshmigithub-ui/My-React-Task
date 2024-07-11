import React, { useState } from "react";

const videos = [
  "https://videos.pexels.com/video-files/3545877/3545877-hd_1280_720_30fps.mp4",
  "https://videos.pexels.com/video-files/6431722/6431722-sd_640_360_25fps.mp4",
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
//   "https://as2.ftcdn.net/v2/jpg/03/08/69/75/1000_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
//   "https://as2.ftcdn.net/v2/jpg/03/14/81/65/1000_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
  
];

const VideoPlayer = () => {
  const [currentVideo, SetCurrentVideo] = useState(0);

  const handleNextVideo = () => {
    SetCurrentVideo((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div>
      <video
        key={videos[currentVideo]}
        src={videos[currentVideo]}
        controls
        autoplay
        style={{ width: "50%", maxheight: "20px" }}
      />
      <button onClick={handleNextVideo}>
        <img src="https://cdn-icons-png.flaticon.com/128/556/556690.png" width='70px' height='70px'></img>
      </button>
    </div>
  );
};

export default VideoPlayer;
