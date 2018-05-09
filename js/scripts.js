$( document ).ready( function () {


  $("#article p a  img").click(function (event) {
  event.preventDefault();

    $("#lightbox").show();

    var imageLink = $(this).attr("src");
    imageLink=imageLink.replace("thumbnail", "photo");

    var imgText = "<img src='" + imageLink + "' />";

    $("#lightbox").html(imgText);

    $("#lightbox").click(function (event) {
      $("#lightbox").hide();

    });

  });
});
