import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./NavBar";

class App extends React.Component {
    state = { videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('buildings');
}
    // this will be called whenever the child form is submitted. then the term gets pushed to this class
    onTermSubmit = async term => {
        console.log(term);
       const response = await  youtube.get('/search', {
            params: {
                q: term
            }
        });
       this.setState({videos: response.data.items,
           selectedVideo: response.data.items[0]
       });
    };

    onVideoSelect = video =>{
        this.setState({selectedVideo: video});
    };

    render(){
        return (
            <div>
                <NavBar />
                <div className='ui container'>
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='eleven wide column'>
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className='five wide column'>
                                <VideoList
                                    onVideoSelect={this.onVideoSelect}
                                    videos={this.state.videos}
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default App;