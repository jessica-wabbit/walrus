$(document).ready(function(){

  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".init-trick").click(function(){
    $("img.trick").slideDown();
  });

  $(".init-op-trick").click(function(){
    $("img.other-trick").fadeOut();
  });

  $(".other-options").click(function() {
    $("#opt-1").slideToggle();
    $("#opt-2").slideToggle();
  });

});
