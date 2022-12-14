import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

const { useState, useEffect } = React;

var App = () => {

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();
  const [search, setSearch] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    searchYouTube(search, (data) => {
      console.log({data});
      setVideos(data);
      setCurrentVideo(data[0]);
    });
  }, [search]
  );

  var getQuery = (query) => {
    setSearch(query);
  };

  var selectCurrentVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search getQuery={getQuery}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer setToggle={setToggle} toggle={toggle} video={currentVideo || exampleVideoData[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList selectVideo={selectCurrentVideo} videos={videos || exampleVideoData}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
