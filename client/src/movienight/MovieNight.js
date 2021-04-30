import React from 'react'
import VideoPlayer from 'react-video-js-player'
import wasabi from "../video/wasabi.mp4"
import '@videojs/themes/dist/fantasy/index.css'


function VideoJS() {

    const videoSrc = wasabi
    
    return (
        <div className="video-player">
            <VideoPlayer
            src={videoSrc}
            width = "720"
            height = "420"
            />
        </div>
    )
}

export default VideoJS