var twitter = new TwitterApi();

Meteor.methods({
  getGallery: function (hashtag) {
    var json = twitter.callAsApp('GET', 'search/tweets.json', {
      q           : hashtag + ' -RT',
      filter      : 'images',
      result_type : 'popular',
      count       : '50',
    });

    var data = [];

    if (json.data.statuses) {
      for (status = 0; status < json.data.statuses.length; status++) {
        if (json.data.statuses[status].entities.media) {
          data[status] = json.data.statuses[status].entities.media[0].media_url;
        }
      }
    }

    return data;
  },
});
