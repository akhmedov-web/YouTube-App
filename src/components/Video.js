import React from 'react';
import user from '../images/user.jpg';;

const Video = ({videos}) => {
    console.log(videos.id.videoId)
    
    return (
        <div className='player-box'>
            <iframe
                width="1000"
                height="515"
                src={`https://www.youtube.com/embed/${videos.id.videoId ? videos.id.videoId : 'm5-qAQPRGuo'}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
                className='player'>
            </iframe>
            <h4>{videos.snippet.title ? videos.snippet.title : "ReactJs To'liq kurs 19# dars"}</h4>
            <p>{videos.snippet.description ? videos.snippet.description : 'To do list Practice 19# lesson'}</p>
            <span className='userChannel'><img src={user} alt="channel-avatar" className='channel-avatar'/>
            <p>{videos.snippet.channelTitle ? videos.snippet.channelTitle : 'MUHRIDDIN KHODIEV'}</p>
            </span> 
           

        </div >
    )
}


export default Video;