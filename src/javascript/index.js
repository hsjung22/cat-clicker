$( document ).ready(function() {
  let catCount = 0;
  $(".cat-click").on( "click", function() {
    catCount++;
    $(".cat-click-counter").html(catCount);
  });
});