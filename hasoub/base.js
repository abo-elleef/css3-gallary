var right = function(container){
  container.addClass('right');
};
var left = function(container){
  container.addClass('left');
};
$("document").ready(function(){
  $(".img-container").click(function(){
    right($(this));
  });

});