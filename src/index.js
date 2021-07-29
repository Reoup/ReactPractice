import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './componenets/search_bar';
import VideoList from './componenets/video_list';
import VideoDetail from './componenets/video_detail';

const API_KEY = 'AIzaSyCpNmknKlReIaS2v8mVfsY6SS9gHS81nIQ';



// Create a new component. This componenet should produce
// some HTML

class App extends Component {
constructor(props){
  super(props);

  this.state = { 
    videos: [],
    selectedVideo: null
  };

  this.videoSearch('surfboards'); // 

}

videoSearch(term){ // 유튜브 검색을 리펙토링하여 하나의 메소드로 만듦
  YTsearch({key: API_KEY, term: term}, (videos) => { // 하나의 검색어를 가짐
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    }); // this.setState({videos: videos});
  });
}

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> 
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}
// <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> 검색 바에서 새로운 검색어로 바뀌면 이 검색 함수를 호출하게 되며 새로운 비디오를 가져옴


// Take this componenet's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));

