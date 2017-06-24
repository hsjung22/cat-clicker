$( document ).ready(function() {

  let catCollection = [
    {
      name: 'poplinre',
      count: 0
    },
    {
      name: 'chewie',
      count: 0
    }
  ];

  function catCounterDisplay(name, count){
    let className = name + "-count-display"
    $("." + className).html("Click Counter: " + count);
  }

  $.map( catCollection, function( cat, i ) {
    // image element with click function that'll add 1 to the count
    $( "<img/>", {
      src: "src/images/cat-" + cat.name + ".jpg",
      height: "150px",
      click: function() {
        cat.count++;
        catCounterDisplay(cat.name, cat.count);
      }
    }).appendTo( "body" );
    //p tag element to display the updated count
    $("<p/>", {
      class: cat.name +"-count-display",
      text: "Click Counter: 0"
    }).appendTo("body");
  });


});
