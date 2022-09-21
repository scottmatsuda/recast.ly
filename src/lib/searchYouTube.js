import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

var endpoint = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: endpoint,
    type: 'GET',
    data: {
      // eslint-disable-next-line camelcase
      youtube_api_key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 1,
      type: 'video',
      videoEmbeddable: true,
    },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;