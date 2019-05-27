import React from 'react' ;
import '../css/VideoItem.css'
const VideoItem = ({video , OnSelectedVideo}) => {
    return(<div onClick={()=>OnSelectedVideo(video)} className="item video-item">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
            <div className="header">
                {video.snippet.title}
            </div>
        </div>


        </div>)

}

export default VideoItem