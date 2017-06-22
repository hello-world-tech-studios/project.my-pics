$(document).ready(function() {

  /* Your Javascript Here */
  console.log("page is loaded");
  $(".pictureBoxes").click(function(event){
    
    var pictureClicked = event.target.src;
    console.log(event.target.src);
    $("#pictureDisplay").append(`<img src="${pictureClicked}"/>`);
  });
});
