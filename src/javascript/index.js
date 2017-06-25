$( document ).ready(function() {

  let catCollection = [
    {
      name: 'poplinre',
      count: 0
    },
    {
      name: 'chewie',
      count: 0
    },
    {
      name: 'jetske',
      count: 0
    },
    {
      name: 'tom',
      count: 0
    },
    {
      name: 'garfield',
      count: 0
    }
  ];

  function catCounterDisplay(cat){
    let className = cat.name + "-count-display"
    $("." + className).html("Click Counter: " + cat.count);
  }

  function selectedCatDisplay(cat){
    // display cat image
    $('.cat-display').html(
      $( "<img/>", {
        src: "src/images/" + cat.name + ".jpg",
        height: "150px",
        click: function() {
          cat.count++;
          catCounterDisplay(cat);
        }
      })
    )
    // display counter
    $("<p/>", {
      class: cat.name +"-count-display",
      text: "Click Counter: " + cat.count
    }).appendTo($('.cat-display'));

  }

  // display the names of all the cats on the left of the screen
  // clicking on each name will display its picture with its count
  $.map( catCollection, function( cat, i ) {
    $("<h4/>", {
      text: cat.name,
      click: function() {
        selectedCatDisplay(cat);
      }
    }).appendTo( $('.cat-name-list') );
  });


});
