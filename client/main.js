Template.topbarSearch.events({
  "click button#logout": function (e) {
    e.preventDefault();

    Session.set("links", null);
    Meteor.logout();
  },

  "keydown button#logout": function (e) {
    if (e.which == "13")
      return;
  }

  "click button#hashtagSearch": function (e) {
    e.preventDefault();

    var hashtag = document.getElementById("hashtagSearchText").value;

    if (hashtag == '') return;

    if (hashtag[0] !== '#') hashtag = '#' + hashtag;

    Meteor.call("getGallery", hashtag, function (err, data) {
      if (err)
        console.log(err);

      if (data.length > 0)
        Session.set("links", data);
    });
  },
});

Template.imageGrid.links = function () {
  return Session.get("links");
}
