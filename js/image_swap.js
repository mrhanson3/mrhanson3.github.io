$(document).ready(function () {
  // preload images
  $("#image_list a").each(function () {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  // set up event handlers for links
  $("#image_list a").click(function (evt) {
    var imageURL = $(this).attr("href");

    $("#image").attr("src", imageURL);

    var caption = $(this).attr("title");
    //callback function that fades out, and then fade in for caption and image
    $("#caption").fadeOut(1000, function () {
      $("#caption").text(caption).fadeIn(1000);
    });

    $("#image").fadeOut(1000, function () {
      $("#image").attr("src", imageURL).fadeIn(1000);
    });
    // cancel the default action of the link
    evt.preventDefault();
  }); // end click
  // move focus to first thumbnail
  $("li:first-child a").focus();
});
