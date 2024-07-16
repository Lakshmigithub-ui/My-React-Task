import React, { useState } from 'react';
import player from './player.css'


function Videoplayer() {
  // Define media items array with mixed image and video types
  const mediaItems = [
    { type: 'image', src: "https://as2.ftcdn.net/v2/jpg/03/08/69/75/1000_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"},
    { type: 'video', src:  "https://videos.pexels.com/video-files/6431722/6431722-sd_640_360_25fps.mp4" },
    { type: 'image', src: "https://as2.ftcdn.net/v2/jpg/03/14/81/65/1000_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg" },
    { type: 'video', src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Index to track current media

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const { type, src } = mediaItems[currentIndex]; // Get current media type and source

  return (
    <div className="playerstyle">
      {type === 'image' ? (
        <img
          src={src}
          alt="Media"
          style={{ width: '50%', maxHeight: '300px' }}
        />
      ) : (
        <video
          src={src}
          controls
          autoPlay
          style={{ width: '50%', maxHeight: '300px' }}
        />
      )}

      <button onClick={handleNext}>
      <img src="https://cdn-icons-png.flaticon.com/128/556/556690.png" width='70px' height='70px'></img>
      </button>
    </div>
  );
}

export default Videoplayer;

// import React, { useState } from "react";
// import player from './player.css'

// const videos = [
//   "https://videos.pexels.com/video-files/3545877/3545877-hd_1280_720_30fps.mp4",
//   "https://videos.pexels.com/video-files/6431722/6431722-sd_640_360_25fps.mp4",
//   'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
//   "https://as2.ftcdn.net/v2/jpg/03/08/69/75/1000_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
//   "https://as2.ftcdn.net/v2/jpg/03/14/81/65/1000_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
  
// ];

// const VideoPlayer = () => {
//   const [currentVideo, SetCurrentVideo] = useState(0);

//   const handleNextVideo = () => {
//     SetCurrentVideo((prevIndex) => (prevIndex + 1) % videos.length);
//   };

//   return (
//   //   <div className="playerstyle">
//   //     {isImage ? (
//   //       <img
//   //         src="https://cdn-icons-png.flaticon.com/128/556/556690.png"
//   //         width='70px'
//   //         height='70px'
//   //         alt="Image"
//   //       />
//   //     ) : (
//   //       <video
//   //         key={videos[currentVideo]}
//   //         src={videos[currentVideo]}
//   //         controls
//   //         autoPlay
//   //         style={{ width: "50%", maxHeight: "20px" }}
//   //       />
//   //     )}

//   //     <button onClick={() => setIsImage(!isImage)}>
//   //       Toggle Media
//   //     </button>
      
//   //     { !isImage && (
//   //       <button onClick={handleNextVideo}>
//   //         Next Video
//   //       </button>
//   //     )}
//   //   </div>
//   // );
//     <div className="playerstyle">

//       <video
//         key={videos[currentVideo]}
//         src={videos[currentVideo]}
//         controls
//         autoplay
//         style={{ width: "50%", maxheight: "20px" }}
//       />
    
//       <button onClick={handleNextVideo}>
//         <img src="https://cdn-icons-png.flaticon.com/128/556/556690.png" width='70px' height='70px'></img>
//       </button>
//     </div>
//   );
// };

// export default VideoPlayer;
