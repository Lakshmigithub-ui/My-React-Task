import React from "react";
import Video from "./Video";
import Videostyle from './Videostyle.css';


    var  video= [
        {id:1, title:'video 1', url: 'https://videos.pexels.com/video-files/4828605/4828605-uhd_2732_1440_25fps.mp4'},
        {id:2, title:'video 2', url: 'https://media.istockphoto.com/id/1459448023/video/downtown-business-centre-of-london-with-traffic-4k-time-lapse.mp4?s=mp4-640x640-is&k=20&c=KJ27UV543ODgyN9XWoFHtkHywsDKtN9KbvF4UTX1IyE='},
        {id:3, title:'video 3', url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'},
        {id:4, title:'video 4', url: 'https://media.istockphoto.com/id/1488371748/video/indian-male-data-scientist-and-caucasian-female-business-manager-talking-in-front-of-big.mp4?s=mp4-640x640-is&k=20&c=zMdvz6urgxh3TZ9h6rp8jQmZ5CnST_k7YOBb0tlNfTI='},
        {id:5, title:'video 5', url: 'https://cdn.pixabay.com/video/2015/10/16/1046-142621379_large.mp4'},
        {id:6, title:'video 6', url: 'https://media.istockphoto.com/id/1488371748/video/indian-male-data-scientist-and-caucasian-female-business-manager-talking-in-front-of-big.mp4?s=mp4-640x640-is&k=20&c=zMdvz6urgxh3TZ9h6rp8jQmZ5CnST_k7YOBb0tlNfTI='},
        {id:7, title:'video 7', url: 'https://media.istockphoto.com/id/1488371748/video/indian-male-data-scientist-and-caucasian-female-business-manager-talking-in-front-of-big.mp4?s=mp4-640x640-is&k=20&c=zMdvz6urgxh3TZ9h6rp8jQmZ5CnST_k7YOBb0tlNfTI='},

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