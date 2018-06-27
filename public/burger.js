$(function() {
    $(".eat-da-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var justDevoured = {
        devoured: justDevoured
          };
  
      $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
        data: justDevoured
      }).then(
        function() {
          console.log("Changed to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
     
      $.ajax("/api/burgers", {
        method: "POST",
        url:"api/burgers", 
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  