
var VideoPlayer = ({video, setToggle, toggle}) => {

  toggle ? video.id.videoId += '?autoplay=1' : video.id.videoId;

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <button className="btn hidden-sm-down" onClick={(event) => {
          event.preventDefault();
          setToggle(!toggle);
        }}>
          <span className="toggle"> Auto-Play: {toggle ? '(o-)' : '(-o)'}
          </span>
        </button>
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
