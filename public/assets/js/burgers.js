
$(document).ready(function() {

$(function() {

//this will create button to submit a new burger option
$(".change-devour").on("click", function(event) {
    console.log("working?")
   //put the preventDefault here to stop default action from happening
    // event.preventDefault();
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

      var newDevourState = {
        devoured: newDevour
      };

    //need to do api to post the new burger
    $.ajax("/api/burgers/" + id, {

      type: "PUT",
      data: newDevourState
      // .burgers
    }).then(function() {
        console.log("changes state",newDevourState);
        location.reload();
      }
    );
  });
  
  $(document).on("click", ".fred", function(event) {
    console.log("djfnaignaw");
    // event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
     
    };
      console.log(newBurger);
  

      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
       
      }).then(function() {
          console.log("creates new burger");

          // location.reload();
        }
      );
    });   
  });
});