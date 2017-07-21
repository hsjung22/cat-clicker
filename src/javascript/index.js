$( document ).ready(function() {

  var model = {
    adminStatus: false,
    catCollection:
      [
        {
          name: 'poplinre',
          count: 0,
          imgAttribution: "google.com/images",
          imgSource: "src/images/poplinre.jpg"
        },
        {
          name: 'chewie',
          count: 0,
          imgAttribution: "google.com/images",
          imgSource: "src/images/chewie.jpg"
        },
        {
          name: 'jetske',
          count: 0,
          imgAttribution: "google.com/images",
          imgSource: "src/images/jetske.jpg"
        },
        {
          name: 'tom',
          count: 0,
          imgAttribution: "google.com/images",
          imgSource: "src/images/tom.jpg"
        },
        {
          name: 'garfield',
          count: 0,
          imgAttribution: "google.com/images",
          imgSource: "src/images/garfield.jpg"
        },
        {
          name: 'dave',
          count: 0,
          imgAttribution: "google.com/images",
          imgSource: "src/images/dave.jpg"
        }
      ],

    getAllCats: function() {
      return this.catCollection;
    },

    addCount: function(cat) {
      cat.count++;
    },

    toggleAdminStatus: function() {
      this.adminStatus = !this.adminStatus;
    },

    getAdminStatus: function() {
      return this.adminStatus;
    },

    updateCat: function(cat, updateField) {
      $.extend(cat, updateField);
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
        view.renderCat(cat);
        view.renderCount(cat);
        this.renderAdminSection(cat);
      },

      toggleAdmin: function(cat) {
        model.toggleAdminStatus();
        this.renderAdminSection(cat);
      },

      addCount: function(cat) {
        model.addCount(cat);
        view.renderCount(cat);
        this.rerenderCat(cat);
      },

      updateCat: function(cat, updateField) {
        model.updateCat(cat, updateField);
        model.toggleAdminStatus();
        this.rerenderCat(cat);
      },

      rerenderCat: function(cat) {
        view.renderCatNameList();
        view.renderCount(cat);
        this.renderAdminSection(cat);
      },

      renderAdminSection: function(cat) {
        if (model.getAdminStatus()){
          view.renderAdminForm(cat, model.getAdminStatus());
        } else {
          view.renderAdminButton(cat);
        }
      }
  };

  var view = {
      renderCatNameList: function() {
        $('.cat-list-container').html(
          $( "<div/>", {
            class: "cat-name-list"
          })
        )

        this.buildCatNameList()
      },

      buildCatNameList: function() {
        $.map( octopus.getAllCats(), function(cat, i) {
          $("<h4/>", {
            text: cat.name,
            click: function() {
              octopus.catSelected(cat);
            }
          }).appendTo( $('.cat-name-list') );
        });
      },

      renderCat: function(cat) {
        // display cat image
        $('.cat-picture').html(
          $( "<img/>", {
            src: cat.imgSource,
            height: "150px",
            click: function() {
              octopus.addCount(cat);
            }
          })
        )
      },

      renderCount: function(cat) {
        // display counter
        $('.cat-count').html(
          $("<p>", {
            class: cat.name + "-count-display",
            text: "Click Counter: " + cat.count
          })
        )
      },

      renderAdminButton: function(cat) {
        $(".admin").html(
          $("<button>", {
            text: 'Admin',
            click: function() {
              octopus.toggleAdmin(cat);
            }
          })
        )
      },

      renderAdminForm: function(cat) {
        $(".admin").html(
          $("<form>", {
            class: 'admin-form'
          })
        )

        this.appendNameInput(cat)
        this.appendClickInput(cat)
        this.appendURLInput(cat)
        this.appendFormSubmit(cat)
        this.cancelAdmin(cat)
      },

      appendNameInput: function(cat) {
        $("<input>", {
          class: 'cat-name-input',
          placeholder: 'Name',
          value: cat.name
        }).appendTo( $('.admin-form') );
      },

      appendClickInput: function(cat) {
        $("<input>", {
          class: 'cat-click-input',
          placeholder: 'Click #',
          value: cat.count
        }).appendTo( $('.admin-form') );
      },

      appendURLInput: function(cat) {
        $("<input>", {
          class: 'cat-url-input',
          placeholder: 'URL',
          value: cat.imgAttribution
        }).appendTo( $('.admin-form') );
      },

      appendFormSubmit: function(cat) {
        $("<input>", {
          value: "Submit",
          type: "button",
          click: function() {
            octopus.updateCat(cat, {
              imgAttribution: $('.cat-url-input').val(),
              count: $('.cat-click-input').val(),
              name: $('.cat-name-input').val()
            })
          }
        }).appendTo( $('.admin-form') );
      },

      cancelAdmin: function(cat) {
        $("<input>", {
          value: "Cancel",
          type: "button",
          click: function() {
            octopus.toggleAdmin(cat);
          }
        }).appendTo( $('.admin-form') );
      }

  };

  octopus.init();

});
