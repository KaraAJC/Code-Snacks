// $(document).ready(function() {

//   $('#get_color').on('click', function() {
//     var request = $.ajax({
//                 url:'/color',
//                 method:'POST'
//     });

//     request.done(function(response) {
//       $("li").css("background-color", "#ffffff")
//       $("li").eq(response.cell).css("background-color", response.color)
//     });
//   });



// });

$(document).ready(function() {

  $('#get_color').on('click', function() {  // when the #get_color button is clicked,
    var request = $.ajax({                  // make an AJAX request
                url:'/color',
                method:'POST'
    });
    request.done(function(response) {
      $("li").css("background-color", "#ffffff")
      $("li").eq(response.cell).css("background-color", response.color)
    });

    // new colors will set a new game.
    // the computer will start a sequence with one cell flashing, and a sound.
  var sequence = [] // store click sequence
    // User must click on the cell that flashed to make the same sound. if the cell clicked matches computer, a cell will be added to the sequence and it will play the sequence from 0
    // process will continue until user does not match sequence.
    // game will end, and user will be notified of how many "rounds" they were able to complete.
    // Round record will be saved to show high score ranking on the site.

  });



});
