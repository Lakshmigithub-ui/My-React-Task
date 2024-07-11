import React from "react";
import Video from "./Video";
import Videostyle from './Videostyle.css';


    var  video= [
        {id:1, title:'video 1', url: 'https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4'},
        {id:2, title:'video 2', url: 'https://media.istockphoto.com/id/1459448023/video/downtown-business-centre-of-london-with-traffic-4k-time-lapse.mp4?s=mp4-640x640-is&k=20&c=KJ27UV543ODgyN9XWoFHtkHywsDKtN9KbvF4UTX1IyE='},
        {id:3, title:'video 3', url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'},

    ];
    // console.log(video);
    var InstaVideo = () => {
        return (
            <div className="video-list">
                {video.map(v => (
                    <Video key={v.id} title={v.title} url={v.url} />
                ))}
            </div>
        );
    };
    

export default InstaVideo;