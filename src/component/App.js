import React from 'react';
import youtube from '../api/youtube'
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import VideoDetail from "./VideoDetail";
class App extends React.Component{
    state = {
        videos : [] ,
        selectedVideo : null
    }

    componentDidMount(){
        this.OnSearch('buildings')
    }
    OnSearch= async (term)=>{
      const response  = await youtube.get('/search' , {
            params:{
                q : term
            }
        });
      this.setState({videos : response.data.items , selectedVideo : response.data.items[0]})

}

       OnSelectedVideo = (video)=>{
        this.setState({selectedVideo:video})
       }
    render(){
        return(<div className="ui container">
        <SearchBar Onsearch={this.OnSearch}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="six wide column">
            <VideoList OnSelectedVideo={this.OnSelectedVideo} videos = {this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default App;