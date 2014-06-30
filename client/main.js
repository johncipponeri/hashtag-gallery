Template.topbarSearch.events({
  "click button#hashtagSearch": function (e) {
    e.preventDefault();

    var hashtag = document.getElementById("hashtagSearchText").value;

    if (hashtag == '') return;

    if (hashtag[0] !== '#') hashtag = '#' + hashtag;

    Meteor.call("getGallery", hashtag, function (err, data) {
      if (err)
        console.log(err);

      Session.set("links", data);
    });
  },
});

Template.imageGrid.links = function () {
  return Session.get("links");
}
