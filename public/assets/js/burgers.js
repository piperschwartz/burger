$(function() {

//this will create button to submit a new burger option
$(".create-form").on("submit", function(event) {
   //put the preventDefault here to stop default action from happening
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim()
    };

    //need to do api to post the new butger
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("creates new burger");
        location.reload();
      }
    );
  });
//deletes a burger
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

   //this will request the deletion of a burger
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
        console.log("deleted a burger option", id);
        location.reload();
      }
    );
  });
  $(".eatburger").on("click", function(event) {
      //this also needs a preventDefault
      event.preventDefault();
    var id = $(this).data("id");
    var devouredState = $(this).data("devouredstate");

    var newDevoured= {
      devoured: newDevoured
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed state to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});

//maybe in this code I need to add a method that will control the burgers listed on the screen.