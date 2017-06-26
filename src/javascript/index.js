$( document ).ready(function() {

  var model = {
    catCollection:[
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
                    },
                    {
                      name: 'dave',
                      count: 0
                    }
                  ],

    getAllCats: function() {
      return this.catCollection;
    },

    addCount: function(cat) {
      cat.count++;
    }


  };

  var octopus = {
      init: function() {
        view.renderCatNameList();
      },

      getAllCats: function() {
        return model.getAllCats();
      },

      catSelected: function(cat) {
        view.renderCatDisplay(cat);
      },

      addCount: function(cat) {
        model.addCount(cat);
        view.renderCatDisplay(cat);
      }
  };

  var view = {
      renderCatNameList: function() {
        $.map( octopus.getAllCats(), function( cat, i ) {
          $("<h4/>", {
            text: cat.name,
            click: function() {
              octopus.catSelected(cat);
            }
          }).appendTo( $('.cat-name-list') );
        });
      },

      renderCatDisplay: function(cat) {
        // display cat image
        $('.cat-display').html(
          $( "<img/>", {
            src: "src/images/" + cat.name + ".jpg",
            height: "150px",
            click: function() {
              octopus.addCount(cat);
            }
          })
        )
        // display counter
        $("<p/>", {
          class: cat.name +"-count-display",
          text: "Click Counter: " + cat.count
        }).appendTo($('.cat-display'));

      }
  };

  octopus.init();

});
