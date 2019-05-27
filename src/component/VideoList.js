import React from 'react';
import VideoItem from './VideoItem' ;
const VideoList = ({videos , OnSelectedVideo}) =>{

   const renderedList =  videos.map((video)=>{ return(<VideoItem OnSelectedVideo={OnSelectedVideo} key={video.id.videoId} video={video}/>)});
 return(<div className="ui divided relaxed list">{renderedList}</div>)
}

export default VideoList