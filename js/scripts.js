$(document).ready(function() {
  $("p").mouseenter(function() {
    var clickedP = $(this);
    clickedP.addClass("highlight");
  });

  $("p").mouseleave(function() {
    var clickedP = $(this);
    clickedP.removeClass("highlight");
});
});
