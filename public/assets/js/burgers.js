// tried to get it to work without making this since the instructions didnt have this file
// but i kept getting an error with my controller when i tried to add a burger or even move an existing one around
// im going to make a js file similar to the one in the cats code

$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devour = true;
  
      var newState = {
        devour: devour
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("changed devour to", true);
          location.reload();
        }
      );
    });
        
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devour: false
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });